import { prisma } from "../../../lib/prisma";

class CreateProfissionaisController{
	async createProfissionaisModel(
		nomeProfissionais:string,
		especialidade:string
	){
			
		const profissionais = await prisma.profissionais.create({
			data:{
				id:'12355545s6',
				nome:nomeProfissionais,
				especialidade:especialidade
			}
		})
		return profissionais
	}
}


export default new CreateProfissionaisController() 