import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateProfissionaisModel from "./createProfissionaisModel"

class CreateProfissionaisController{
	async createProfissionais(req:Request,res:Response){
		
		const { nome,especialidade } = req.body

		try{
			const profissionais = await CreateProfissionaisModel.createProfissionaisModel(nome,especialidade)
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