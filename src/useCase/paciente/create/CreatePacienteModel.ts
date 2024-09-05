import { prisma } from "../../../lib/prisma";

class CreatePacienteController{ // recebe os dados do model
	async createPacienteModel(
		nomePaciente:string,
		dataNascimento:string,
		genero:string,
		telefone:number,
		email:string,
		senha:string,
		agendamentoId: number
	){
			
		const paciente = await prisma.paciente.create({ // abre o banco de dados
			data:{
				nome:nomePaciente,
				dataNascimento:dataNascimento,
				genero:genero,
				telefone:telefone, // guarda as informações
				email:email,
				senha:senha,
				agendamento: {
					connect: {
						id: agendamentoId,
					},
				},
			
			}
		}) 
		return paciente // fecha o banco de dados/ gaveta
	}
}


export default new CreatePacienteController() 