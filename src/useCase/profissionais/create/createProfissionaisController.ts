import { Request,Response } from "express"
import CreateProfissionaisModel from "./createProfissionaisModel"

class CreateProfissionaisController{
	async createProfissionais(req:Request,res:Response){
		
		const { nome,especialidade, procedimentosId, locaisId, disponibilidadesId, agendamentoId } = req.body

		try{
			const profissionais = await CreateProfissionaisModel.createProfissionaisModel(nome,especialidade, procedimentosId, locaisId, disponibilidadesId, agendamentoId)
			return res.json(profissionais)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateProfissionaisController()