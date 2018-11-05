import Joi from 'joi';

const userSchema = {
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  password: Joi.string()
    .min(3)
    .required(),
};

export default userSchema;
