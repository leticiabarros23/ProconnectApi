import { prisma } from "../../../lib/prisma";

class CreateLocaisProcedimentosController{
	async createLocaisProcedimentosModel(
		locais_id:string,
		procediemntos_id:string

	){
			
		const locaisProcedimentos = await prisma.locais_procedimentos.create({
			data:{
				locais_id:locais_id,
				procediemntos_id:procediemntos_id
			}
		})
		return locaisProcedimentos
	}
}


export default new CreateLocaisProcedimentosController() 