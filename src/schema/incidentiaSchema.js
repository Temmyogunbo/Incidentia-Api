import Joi from 'joi';

const incidentiaSchema = {
  incidenciaName: Joi.string()
    .min(3)
    .required(),
  reporter: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  severity: Joi.string()
    .min(3)
    .max(10)
    .required(),
  priority: Joi.string()
    .min(3)
    .max(10)
    .required(),
  cause: Joi.string()
    .min(10)
    .required(),
  solution: Joi.string().min(10),
  solved: Joi.boolean().required(),
};

export default incidentiaSchema;