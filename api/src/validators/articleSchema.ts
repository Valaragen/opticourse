import Joi from 'joi';

const articleSchema = Joi.object({
  name: Joi.string()
  .min(1)
  .max(50)
  .required(),

  description: Joi.string()
    .max(500)
    .optional(),
});


export default articleSchema;
