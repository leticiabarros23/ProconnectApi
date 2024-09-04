import { prisma } from "../../../lib/prisma";

class CreateAgendamentoController{
	async createAgendamentoModel(
		Data: Date,
		Hora: Date,
		Descricao: string,
		locaisId: number,
		profissionaisId: number,
		disponibilidadesId: number,
		procedimentosId: number,
		pacienteId: number
	){
			
		const agendamento = await prisma.agendamento.create({
			data:{
			data:  Data,
			hora: Hora,
			descricao: Descricao,
			locais: {
				connect: { id: Number(locaisId) },
			  },
			profissionais:  {
				connect: {
					id: profissionaisId,
				},
			},
			disponibilidades: {
				connect: {
					id: disponibilidadesId,
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
		return agendamento
	}
}


export default new CreateAgendamentoController() 