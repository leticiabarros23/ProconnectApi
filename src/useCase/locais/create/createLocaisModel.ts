import { prisma } from "../../../lib/prisma";

class CreateLocaisController{
	async createLocaisModel(
		nomeLocais:string,
		endereco:string,
		telefone:number
	){
			
		const locais = await prisma.locais.create({
			data:{
				nome:nomeLocais,
				endereco:endereco,
				telefone:telefone
			}
		})
		return locais
	}
}


export default new CreateLocaisController() 