import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreatePacienteModel from "./CreatePacienteModel"

class CreatePacienteController{
	async createPaciente(req:Request,res:Response){
		
		const { nome,dataNascimento,genero,telefone,email,senha, agendamentoId } = req.body

		try{
			const paciente = await CreatePacienteModel.createPacienteModel(nome,dataNascimento,genero,telefone,email,senha, agendamentoId)
			return res.json(paciente)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreatePacienteController()