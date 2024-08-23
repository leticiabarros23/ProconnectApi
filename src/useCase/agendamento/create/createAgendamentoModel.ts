import { prisma } from "../../../lib/prisma";

class CreateAgendamentoController{
	async createAgendamentoModel(
		nomePaciente:string,
		dataNascimento:string,
		genero:string,
		telefone:number,
		email:string,
		senha:string
	){
			
		const paciente = await prisma.agendamento.create({
			data:{
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


export default new CreateAgendamentoController() 