import { prisma } from "../../../lib/prisma";

class CreateAgendamentoController{ 
	async createAgendamentoModel( //recebe os dados do controller
		Data: Date, //recebeu a data 
		Hora: Date, //recebeu a hora
		Descricao: string, //recebeu a descrição
		locaisId: number, //recebeu o id do local
		profissionaisId: number, // recebeu o id do profissional
		disponibilidadesId: number, // recebeu o id da disponibilidades
		procedimentosId: number, // recebeu o id da procedimento
		pacienteId: number // recebeu o id do paciente
	){
			
		const agendamento = await prisma.agendamento.create({ // abre a gaveta - banco de dados
			data:{
			data:  Data,
			hora: Hora,
			descricao: Descricao,
			locais:{
				
			},
			profissionais:  {
				connect: {
					id: profissionaisId,
				},
			},
			disponibilidades: {
				connect: {
					id: disponibilidadesId, // guarda as informações
				},
			},
			procedimentos: {
				connect: {
					id: procedimentosId,
				},
			},
			paciente:  {
				connect: {
					id: pacienteId,
				},
			},
			}
		})
		return agendamento // fecha a gaveta
	}
}


export default new CreateAgendamentoController() 