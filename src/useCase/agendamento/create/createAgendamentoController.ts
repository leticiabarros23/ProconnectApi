import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateAgendamentoModel from "./createAgendamentoModel"

class CreateAgendamentoController{
	async createAgendamento(req:Request,res:Response){
		
		const { nome,dataNascimento,genero,telefone,email,senha } = req.body

		try{
			const agendamento = await CreateAgendamentoModel.createAgendamentoModel(nome,dataNascimento,genero,telefone,email,senha)
			return res.json(agendamento)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateAgendamentoController()