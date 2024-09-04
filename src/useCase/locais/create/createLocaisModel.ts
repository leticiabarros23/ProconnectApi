import { prisma } from "../../../lib/prisma";

class CreateLocaisController{
	async createLocaisModel(
		nomeLocais:string,
		endereco:string,
		telefone:number,
		procedimentosId: number,
		profissionaisId: number,
		agendamentoId: number
	){
			
		const locais = await prisma.locais.create({
			data:{
				nome:nomeLocais,
				endereco:endereco,
				telefone:telefone,
				procedimentos: {
					connect: {
						id: procedimentosId,
					},
				},
				profissionais:  {
					connect: {
						id: profissionaisId,
					},
				},
				agendamento:  {
					connect: {
						id: agendamentoId,
					},
				},
			}
		})
		return locais
	}
}


export default new CreateLocaisController() 