import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateLocaisProcedimentosModel from "./createLocaisProcedimentosModel"

class CreateLocaisProcedimentosController{
	async createLocaisProcedimentos(req:Request,res:Response){
		
		const { locais_id, procedimentos_id } = req.body

		try{
			const LocaisProcedimentos = await CreateLocaisProcedimentosModel.createLocaisProcedimentosModel(locais_id, procedimentos_id)
			return res.json(LocaisProcedimentos)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateLocaisProcedimentosController()