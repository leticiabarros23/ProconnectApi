import { prisma } from "../../../lib/prisma";

class CreateDisponibilidadesController{
	async createDisponibilidadesModel(
        data: string,          
        hora_inicio: string,     
        hora_fim: string,        
        profissionaisId: number,
        agendamentoId: number
	){
			
		const disponibilidades = await prisma.disponibilidades.create({
		data:{
                data: new Date(data),
                hora_inicio: new Date(hora_inicio),
                hora_fim: new Date(hora_fim),
                profissionais:  {
                        connect: {
                                id: profissionaisId,
                        },
                },
                // agendamento:  {
                //         connect: {
                //                 id: agendamentoId,
                //         },
                // },
        }
})
		return disponibilidades
	}
}


export default new CreateDisponibilidadesController() 