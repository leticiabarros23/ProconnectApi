import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateAgendamentoModel from "./createDisponibilidadesModel"

class CreateDisponibilidadesController{
	async createDisponibilidades(req:Request,res:Response){
		
		const { data, hora_inicio, hora_fim, profissionalId } = req.body

		try{
			const disponibilidades = await CreateDisponibilidadesModel.createDisponibilidadesModel(data, hora_inicio, hora_fim, profissionalId)
			return res.json(disponibilidades)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateDisponibilidadesController()