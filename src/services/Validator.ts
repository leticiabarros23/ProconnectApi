import Joi, { number } from 'joi';
import axios from 'axios';

import IAluno from '../interface/IStudent';
import IEndereco from '../interface/IAddrees';
import IStudentGuardians from '../interface/IStudentGuardians';
import ISchool from '../interface/ISchool';
import IRegistration from '../interface/IRegistration';
import ISchoolYear from '../interface/ISchoolYear';
import ISchollClass from '../interface/ISchoolClass'; 
import IManager from '../interface/IManager';
import ITeacher from '../interface/ITeacher';
import IGrade from '../interface/IGrade';
import ITimeRange from '../interface/ITimeRange';

class Validator {
  
  async addressValidar({rua,cidade,estado,cep}:IEndereco){
		
    try{		
			const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    	const endereco = response.data
			
			
			if(endereco){
				let {bairro,localidade,uf} = endereco
				
				bairro = bairro.toLowerCase()
				localidade = localidade.toLowerCase()
				uf = uf.toLowerCase()

				rua = rua.toLowerCase()
				cidade = cidade.toLowerCase()
				estado = estado.toLowerCase()
				
				if(rua===bairro && cidade===localidade && estado===uf){
					return true
				}
				return false
			}
			return false
		
		}catch(error){
			return error
		}		
  }

	studentValidator(aluno:IAluno ) {
    const schema = Joi.object({
      nome: Joi.string().min(2).max(100).required(),
      data_nascimento: Joi.date().iso().max('now').required(),
			cpf: Joi.string().min(11).max(11).optional(),
			municipio_nascimento: Joi.string().min(2).max(40).required(),
      uf_nascimento: Joi.string().min(2).max(2).required()
    });  
		
    const validationResult = schema.validate(aluno);

  	if (validationResult.error) {
    	const invalidField = validationResult.error?.details[0].path;
    	return invalidField;
  	}

  	return null;
  }

	studentGuardionsValidator(studentGuardians:IStudentGuardians){
		console.log( studentGuardians.telefone_secundario)
		const schema = Joi.object({
		nome_pai: Joi.string().min(2).max(100).required(),
		nome_mae: Joi.string().min(2).max(100).required(),
    telefone:Joi.string().pattern(/^\d{11}$/).optional(),
		telefone_secundario:Joi.string().pattern(/^\d{11}$/).optional()
    });  
    const validationResult = schema.validate(studentGuardians);

  	if (validationResult.error) {
    	const invalidField = validationResult.error?.details[0].path;
    	return invalidField;
  	}
  	return null;
	}

	schoolValidator(school:ISchool){
		const schema = Joi.object({
			nome: Joi.string().min(2).max(100).required(),
			cod_inep: Joi.string().min(8).max(8).trim().pattern(/^[0-9]+$/),
			email:Joi.string().email().max(100),
		});

		const validationResult = schema.validate(school);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	schoolYearValidator(schoolYear:ISchoolYear){
		const schema = Joi.object({
			data_inicio: Joi.date().iso().required(),
		});

		const validationResult = schema.validate(schoolYear);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	schoolClassValidator(schoolClass:ISchollClass){
		const schema = Joi.object({
			nome: Joi.string().min(1).max(1).required(),
			serie: Joi.number().integer().positive().max(9),
			turno: Joi.string().min(2).max(40).required(),
			status: Joi.string().valid('concluido', 'aberta',).required(),
		});

		const validationResult = schema.validate(schoolClass);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	registrationValidator(registration:IRegistration){
		const schema = Joi.object({
			numero_matricula:Joi.string(),
			status: Joi.string().min(2).max(40).required(),
			escola: Joi.string().min(8).max(8).trim().pattern(/^[0-9]+$/),
			idTurma: Joi.string().min(2).max(80).required(),
			alunoId:Joi.string().min(2).max(40).required()
		});

		const validationResult = schema.validate(registration);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	subjectValidator(registration:IRegistration){
		const schema = Joi.object({
			nome: Joi.string().min(2).max(100).required(),
			carga_horaria:Joi.number().integer().positive().max(9999),
		});

		const validationResult = schema.validate(registration);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	teacherValidator(teacher:ITeacher){
		console.log(teacher)
		const schema = Joi.object({
			nome: Joi.string().min(2).max(100).required(),
			email:Joi.string().email().max(100),
			senha: Joi.string().min(6).max(30).required(),
			data_nascimento: Joi.string().min(6).max(30).required(),
			url_image:Joi.string()
		});

		const validationResult = schema.validate(teacher);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	gradeValidator(grade:IGrade){

		const schema = Joi.object({
			tipo:Joi.string().valid('normal', 'recuperação', 'final'),
			nota:Joi.number().min(0).max(10),
			mes:Joi.number().min(3).max(11).integer(),
			semestre:Joi.number().min(1).max(2),
			anoLetivo:Joi.date(),
			matriculaId:Joi.string(),
			disciplina:Joi.string().max(100)
		});	


		const validationResult = schema.validate(grade);
		
		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	managerValidator(manager:IManager){
		const schema = Joi.object({
			nome: Joi.string().min(2).max(100).required(),
			email:Joi.string().email().max(100),
			senha: Joi.string().min(6).max(30).required(),
		});

		const validationResult = schema.validate(manager);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}
	
	timeRangeValidator(TimeRange:ITimeRange){
		const schema = Joi.object({
			horarioInicio:Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
			horarioFim: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
		});

		const validationResult = schema.validate(TimeRange);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	weekDayValidate(weekDay:string){
		const schema = Joi.object({
			weekDay: Joi.string().min(5).max(10)
		});

		const validationResult = schema.validate({weekDay:weekDay});
		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}
}

export default new Validator;
