import { prisma } from "../../../lib/prisma";

class CreateProcedimentosController{
	async createProcedimentosModel(
		nomeProcedimentos:string,
		descricao:string,
        duracao:string
	){
			
		const procedimentos = await prisma.procedimentos.create({
			data:{
				nome:nomeProcedimentos,
				descricao:descricao,
                duracao: duracao
			}
		})
		return procedimentos
	}
}


export default new CreateProcedimentosController() 