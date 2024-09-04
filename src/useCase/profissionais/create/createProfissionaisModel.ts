import { prisma } from "../../../lib/prisma";

class CreateProfissionaisController{
	async createProfissionaisModel(
		nomeProfissionais:string,
		especialidade:string,
		procedimentosId: number,
		disponibilidadesId:number,
		locaisId:number,
		agendamentoId:number
	){
			
		const profissionais = await prisma.profissionais.create({
			data:{
				nome:nomeProfissionais,
				especialidade:especialidade,
				procedimentos: {
					connect: {
						id: procedimentosId,
					},
				},
				disponibilidades:  {
					connect: {
						id: disponibilidadesId,
					},
				},
				locais: {
					connect: {
						id: locaisId,
					},
				},
				agendamento: {
					connect: {
						id: agendamentoId,
					},
				},
			}
		})
		return profissionais
	}
}


export default new CreateProfissionaisController() 