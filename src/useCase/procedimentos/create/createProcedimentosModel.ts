import { prisma } from "../../../lib/prisma";

class CreateProcedimentosController{
	async createProcedimentosModel(
		nomeProcedimentos:string,
		descricao:string,
        duracao:string
	){
			
		const procedimentos = await prisma.procedimentos.create({
			data:{
				id:'12355545s6',
				nome:nomeProcedimentos,
				descricao:descricao,
                duracao: duracao
			}
		})
		return procedimentos
	}
}


export default new CreateProcedimentosController() 