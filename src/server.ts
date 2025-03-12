import express,{Request,Response,NextFunction} from 'express'
import dotenv from "dotenv";
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import servicoRoutes from './routes/servicoRoutes';
import localizacaoRoutes from './routes/localizacaoRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import avaliacaoRoutes from './routes/avaliacaoRoutes';
import precoRoutes from './routes/precoRoutes';

dotenv.config();


const app = express()
const port = process.env.PORT || 3333

app.use(cors());

app.options('*', cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(categoriaRoutes)
app.use(localizacaoRoutes)
app.use(servicoRoutes)
app.use(usuarioRoutes)
app.use(avaliacaoRoutes)
app.use(precoRoutes)

app.get('/',(req,res)=>{
  res.status(200).send('<h1>Está Online</h1>')
})

app.use((error:Error,request:Request,response:Response,next:NextFunction)=>{
  response.json({
    status:"error",
    message:error.message
  });
  next()
})

app.listen(port,()=>{
  console.log(`Aplicação online na porta http://localhost:${port}`)
})
