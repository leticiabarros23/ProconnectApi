import { prisma } from "../../../lib/prisma";

class CreateProcedimentosController{
	async createProcedimentosModel(
		nomeProcedimentos:string,
		descricao:string,
        duracao:string,
		profissionaisId: number,
		locaisId:number,
		agendamentoId:number
	){
			
		const procedimentos = await prisma.procedimentos.create({
			data:{
				nome:nomeProcedimentos,
				descricao:descricao,
                duracao: duracao,
				profissionais: {
					connect: {
						id: profissionaisId,
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
		return procedimentos
	}
}


export default new CreateProcedimentosController() 