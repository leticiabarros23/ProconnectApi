import { Request,Response } from "express"
import CreateAgendamentoModel from "./createAgendamentoModel"

class CreateAgendamentoController{
	async createAgendamento(req:Request,res:Response){
		
		const {data,hora,descricao,locaisId,profissionaisId,disponibilidadesId,procedimentosId,pacienteId } = req.body // recebe os dados

		try{
			const agendamento = await CreateAgendamentoModel.createAgendamentoModel (data,hora,descricao,locaisId,profissionaisId,disponibilidadesId,procedimentosId,pacienteId) // encaminha as informações/dados para o model
			return res.json(agendamento) // retorna se deu certo

		} catch(e){
			console.log(e)
			return res.json({ // retorna o erro
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateAgendamentoController()