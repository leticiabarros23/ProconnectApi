import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateAgendamentoModel from "./createAgendamentoModel"

class CreateAgendamentoController{
	async createAgendamento(req:Request,res:Response){
		
		const {data,hora,descricao,locaisId,profissionaisId,disponibilidadesId,procedimentosId,pacienteId } = req.body

		try{
			const agendamento = await CreateAgendamentoModel.createAgendamentoModel (data,hora,descricao,locaisId,profissionaisId,disponibilidadesId,procedimentosId,pacienteId)
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