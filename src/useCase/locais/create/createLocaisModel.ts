import { prisma } from "../../../lib/prisma";

class CreateLocaisController{
	async createLocaisModel(
		nomeLocais:string,
		endereco:string,
		telefone:number,
		procedimentosId: number,
		profissionaisId: number
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
						id: procedimentosId,
					},
				},
			}
		})
		return locais
	}
}


export default new CreateLocaisController() 