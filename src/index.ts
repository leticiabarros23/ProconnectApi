import express, { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import helmet from 'helmet';

// 1. Importações do Socket.IO e HTTP
import http from 'http';
import { Server } from 'socket.io';

// Importação do SEU Prisma configurado
import prisma from './lib/prisma';

// Importação das rotas
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

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

// 2. Criar o servidor HTTP a partir do Express (Obrigatório para Socket.IO)
const server = http.createServer(app);

app.use(helmet());

const allowedOrigins = [
  "https://pro-connect-ten.vercel.app", // Produção
  "http://localhost:3000",
  "http://127.0.0.1:3000"
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

// Suas rotas normais da API
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

app.get('/', (req, res) => {
  res.status(200).send('<h1>A API e o Chat estão Online! 🚀</h1>');
});

// 3. Configurar o Servidor de WebSockets (Socket.IO)
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  }
});

// 4. Lógica do Chat em Tempo Real
io.on("connection", (socket) => {
  console.log(`🔌 Novo utilizador conectado: ${socket.id}`);

  socket.on("entrar_conversa", (conversaId) => {
    socket.join(conversaId);
    console.log(`Utilizador entrou na conversa: ${conversaId}`);
  });

  socket.on("enviar_mensagem", async (dados) => {
    const { conversaId, remetenteId, texto } = dados;

    try {
      // Usa a sua instância centralizada do Prisma para gravar a mensagem
      const novaMensagem = await prisma.mensagem.create({
        data: {
          texto,
          remetenteId: Number(remetenteId),
          conversaId
        }
      });

      io.to(conversaId).emit("nova_mensagem", novaMensagem);
      
    } catch (error) {
      console.error("Erro ao gravar mensagem:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log(`🔴 Utilizador desconectado: ${socket.id}`);
  });
});

// Middleware de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro interno:", error);
  res.status(500).json({
    status: "error",
    message: error.message,
  });
});

// 5. ATENÇÃO: Usar `server.listen` no lugar de `app.listen`
server.listen(port, () => {
  console.log(`🚀 Servidor HTTP e WebSockets online na porta http://localhost:${port}`);
});