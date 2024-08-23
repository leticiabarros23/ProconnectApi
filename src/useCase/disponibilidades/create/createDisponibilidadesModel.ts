import { prisma } from "../../../lib/prisma";

class CreateDisponibilidadesController{
	async createDisponibilidadesModel(
        data: string,          
        hora_inicio: string,     
        hora_fim: string,        
        profissionalId: number
	){
			
		const disponibilidades = await prisma.disponibilidades.create({
			data:{
                data: new Date(data),
                hora_inicio: new Date(hora_inicio),
                hora_fim: new Date(hora_fim),
                profissionalId: profissionalId
			}
		})
		return disponibilidades
	}
}


export default new CreateDisponibilidadesController() 