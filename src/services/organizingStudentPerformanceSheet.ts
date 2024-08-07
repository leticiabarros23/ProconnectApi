import { studentPerformanceSheet, Avaliacao } from "../interface/IPerformanceSheet";

export const addMissingNotas2 = (matriculas: studentPerformanceSheet[], totalMeses: number): studentPerformanceSheet[] => {
  return matriculas.map(matricula => {
    let numGrade = 0
    
    const avaliacoesMap = new Map<number, Avaliacao>();
    matricula.avaliacao.forEach(avaliacao => {
      avaliacoesMap.set(avaliacao.mes, avaliacao);
      numGrade++
    });

    // Adicionar notas zero para meses ausentes
    const avaliacoesCompletas: Avaliacao[] = [];
    for (let mes:number = 3; mes <= totalMeses; mes++) {
      
      if (avaliacoesMap.has(mes)) {
        avaliacoesCompletas.push(avaliacoesMap.get(mes)!);
      } 
      
      else {
        if (mes === 7) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 7, // Recuperação após junho
            semestre: null,
            tipo:'1 Recuperação'
          });
        }
        if (mes == 12) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 12, // Recuperação após novembro
            semestre: null,
            tipo:'2 Recuperação'
          });
        }
        
        if (mes === 13) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 13, // Prova final
            semestre: null,
            tipo:'Prova final'
          });
        }        
        else{
          if(mes!==7 && mes!==12 && mes!==13){
            avaliacoesCompletas.push({
              id: null,
              nota: 0,
              mes: mes,
              semestre: null,
              tipo:null
            });
          } 
        }
      }
    }

    const notas = avaliacoesCompletas.map(avaliacao => avaliacao.nota);
    
    if(numGrade<11){
      const media = notas.reduce((sum, nota) => sum + nota, 0) / (numGrade);
      const status: string = 'Cursando';
      return {
        ...matricula,
        avaliacao: avaliacoesCompletas,
        media,
        status
      };
    }

    const media = notas.reduce((sum, nota) => sum + nota, 0) / numGrade;
    const status: string = media > 6 ? 'Aprovado' : 'Reprovado';

    return {
      ...matricula,
      avaliacao: avaliacoesCompletas,
      media,
      status
    };
  });
};
