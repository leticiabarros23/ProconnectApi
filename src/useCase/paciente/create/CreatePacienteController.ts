import { Request,Response } from "express"
import CreatePacienteModel from "./CreatePacienteModel"

class CreatePacienteController{
	async createPaciente(req:Request,res:Response){
		
		const { nome,dataNascimento,genero,telefone,email,senha, agendamentoId } = req.body // determina aos dados

		try{
			const paciente = await CreatePacienteModel.createPacienteModel(nome,dataNascimento,genero,telefone,email,senha, agendamentoId) // encaminha os dados para o model
			return res.json(paciente) // retorna se deu  certo

		} catch(e){
			console.log(e)
			return res.json({ // retorna o erro
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreatePacienteController()