import express, { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import { Server } from 'socket.io';
import jwt, { JwtPayload } from "jsonwebtoken"; 

import prisma from './lib/prisma';
import { enviarNotificacaoPush } from "./lib/pushNotification";
import { iniciarJobLembrete } from './jobs/lembreteAssinatura'; // 👈 NOVO

import usuarioRoutes from './routes/usuarioRoutes';
import servicoRoutes from './routes/servicoRoutes';
import localizacaoRoutes from './routes/localizacaoRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import avaliacaoRoutes from './routes/avaliacaoRoutes';
import precoRoutes from './routes/precoRoutes';
import authRoutes from './routes/authRoutes';
import servicoRealizadoRoutes from "./routes/servicoRealizadoRoutes";
import contatoWhatsappRoutes from "./routes/contatoWhatsappRoutes";
import segmentoRoutes from "./routes/segmentoRoutes";
import portfolioRoutes from "./routes/portfolioRoutes";
import favoritoRoutes from "./routes/favoritoRoutes";
import chatRoutes from './routes/chatRoutes';
import assinaturaRoutes from './routes/assinaturaRoutes';
import pagamentoRoutes from './routes/pagamentoRoutes';
import webhookRoutes from './routes/webhookRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

const server = http.createServer(app);

app.use(helmet());

const allowedOrigins = [
  "https://pro-connect-ten.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://preoccupy-freebase-overcook.ngrok-free.dev",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API
app.use(categoriaRoutes);
app.use(localizacaoRoutes);
app.use(servicoRoutes);
app.use(usuarioRoutes);
app.use(avaliacaoRoutes);
app.use(precoRoutes);
app.use(authRoutes);
app.use(servicoRealizadoRoutes);
app.use(contatoWhatsappRoutes);
app.use(segmentoRoutes);
app.use(portfolioRoutes);
app.use(favoritoRoutes);
app.use(chatRoutes);
app.use(assinaturaRoutes);
app.use(pagamentoRoutes);
app.use(webhookRoutes);

app.get('/', (req, res) => {
  res.status(200).send('<h1>A API e o Chat estão Online! 🚀</h1>');
});

// ============================================================
// SOCKET.IO — CONFIGURAÇÃO E AUTENTICAÇÃO
// ============================================================

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Não autorizado: token em falta."));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (
      typeof decoded !== "object" ||
      typeof decoded.sub !== "number" ||
      typeof decoded.email !== "string"
    ) {
      throw new Error();
    }

    socket.data.user = { id: decoded.sub, email: decoded.email };
    next();
  } catch {
    return next(new Error("Não autorizado: token inválido ou expirado."));
  }
});

io.on("connection", (socket) => {
  const userId: number = socket.data.user.id;
  console.log(`🔌 Utilizador autenticado conectado: ${userId}`);

  socket.on("entrar_conversa", async (conversaId: string) => {
    const conversa = await prisma.conversa.findFirst({
      where: {
        id: conversaId,
        OR: [{ clienteId: userId }, { profissionalId: userId }],
      },
    });

    if (!conversa) {
      return socket.emit("erro", "Não tens permissão para aceder a este chat.");
    }

    socket.join(conversaId);
    console.log(`✅ Utilizador ${userId} entrou na conversa ${conversaId}`);
  });

  socket.on("enviar_mensagem", async (dados, callback) => {
    const { conversaId, texto } = dados;

    try {
      const conversa = await prisma.conversa.findFirst({
        where: {
          id: conversaId,
          OR: [{ clienteId: userId }, { profissionalId: userId }],
        },
      });

      if (!conversa) {
        return callback?.({ status: "error", error: "Acesso negado." });
      }

      const novaMensagem = await prisma.mensagem.create({
        data: {
          texto,
          remetenteId: userId,
          conversaId,
        },
      });

      socket.to(conversaId).emit("nova_mensagem", novaMensagem);

      const destinatarioId =
        conversa.clienteId === userId ? conversa.profissionalId : conversa.clienteId;

      const [destinatario, remetente] = await Promise.all([
        prisma.usuario.findUnique({ where: { id: destinatarioId } }),
        prisma.usuario.findUnique({ where: { id: userId } }),
      ]);

      if (destinatario?.fcmToken) {
        await enviarNotificacaoPush({
          fcmToken: destinatario.fcmToken,
          remetenteNome: remetente?.nome ?? "Alguém",
          textoMensagem: texto,
          conversaId,
        });
      }

      callback?.({ status: "ok", mensagem: novaMensagem });

    } catch (error) {
      console.error("Erro ao gravar mensagem:", error);
      callback?.({ status: "error", error: "Erro ao guardar a mensagem." });
    }
  });

  socket.on("disconnect", () => {
    console.log(`🔴 Utilizador ${userId} desconectado`);
  });
});

// ============================================================
// MIDDLEWARE DE ERROS
// ============================================================

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro interno:", error);
  res.status(500).json({
    status: "error",
    message: error.message,
  });
});

// ============================================================
// INICIAR SERVIDOR
// ============================================================

// 👈 NOVO — inicia o job de lembrete de assinatura
iniciarJobLembrete();

server.listen(port, () => {
  console.log(`🚀 Servidor HTTP e WebSockets online na porta http://localhost:${port}`);
});