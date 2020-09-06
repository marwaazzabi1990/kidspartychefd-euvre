const Joi = require("@hapi/joi");
// Register validation
const validation = (data) => {
  const schema = {
    nom: Joi.string().min(3).required(),
    prenom: Joi.string().min(3).required(),
    établissement: Joi.string().min(3).required(),
    photos: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().min(3).required(),
  };
  return Joi.validate(data, schema);
};

module.exports.validation = validation;
