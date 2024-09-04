import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateProcedimentosModel from "./createProcedimentosModel"

class CreateProcedimentosController{
	async createProcedimentos(req:Request,res:Response){
		
		const { nome,descricao,duracao,profissionaisId, locaisId, agendamentoId } = req.body

		try{
			const procedimentos = await CreateProcedimentosModel.createProcedimentosModel(nome,descricao,duracao, profissionaisId, locaisId, agendamentoId)
			return res.json(procedimentos)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateProcedimentosController()