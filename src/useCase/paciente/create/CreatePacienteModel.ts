import { prisma } from "../../../lib/prisma";

class CreatePacienteController{
	async createPacienteModel(
		nomePaciente:string,
		dataNascimento:string,
		genero:string,
		telefone:number,
		email:string,
		senha:string
	){
			
		const paciente = await prisma.paciente.create({
			data:{
				id:'12355545s6',
				nome:nomePaciente,
				dataNascimento:dataNascimento,
				genero:genero,
				telefone:telefone,
				email:email,
				senha:senha
			}
		})
		return paciente
	}
}


export default new CreatePacienteController() 