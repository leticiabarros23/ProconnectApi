import { prisma } from "../../../lib/prisma";

class CreatePacienteController{
	async createPacienteModel(
		nomePaciente:string,
		dataNascimento:string,
		genero:string,
		telefone:number,
		email:string,
		senha:string,
		agendamentoId: number
	){
			
		const paciente = await prisma.paciente.create({
			data:{
				nome:nomePaciente,
				dataNascimento:dataNascimento,
				genero:genero,
				telefone:telefone,
				email:email,
				senha:senha,
				agendamento: {
					connect: {
						id: agendamentoId,
					},
				},
			
			}
		}) 
		return paciente
	}
}


export default new CreatePacienteController() 