import express,{Request,Response,NextFunction} from 'express'
import dotenv from "dotenv";
import cors from 'cors';
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


dotenv.config();


const app = express()
const port = process.env.PORT || 3333

const allowedOrigins = [
    "https://pro-connect-ten.vercel.app", // EM PRODUÇÂO
    // "https://pro-connect-git-main-leticias-projects-caf83cc5.vercel.app",
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
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

// app.options("*", cors(corsOptions));
app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(categoriaRoutes)
app.use(localizacaoRoutes)
app.use(servicoRoutes)
app.use(usuarioRoutes)
app.use(avaliacaoRoutes)
app.use(precoRoutes)
app.use(authRoutes)
app.use(servicoRealizadoRoutes);
app.use(contatoWhatsappRoutes);
app.use(segmentoRoutes);
app.use(portfolioRoutes);


app.get('/',(req,res)=>{
  res.status(200).send('<h1>Está Online</h1>')
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro interno:", error); // 🔥 mostra o erro completo no terminal
  res.status(500).json({
    status: "error",
    message: error.message,
  });
});

app.listen(port,()=>{
  console.log(`Aplicação online na porta http://localhost:${port}`)
})
