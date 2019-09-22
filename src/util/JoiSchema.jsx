import Joi from "joi-browser";

export const movieSchema = {
  name: Joi.string()
    .min(1)
    .max(40)
    .required(),
  releaseYear: Joi.number().required(),
  genreId: Joi.number().required(),
  languageId: Joi.number().required(),
  story: Joi.string()
    .min(10)
    .max(200)
    .required()
};

export const reviewSchema = {
  createdUserId: Joi.optional(),
  createdUserName: Joi.string().required(),
  likeMovie: Joi.string()
    .min(1)
    .max(1)
    .required(),
  rating: Joi.number()
    .min(0.25)
    .required(),
  comments: Joi.string()
    .min(10)
    .max(200)
    .required()
};

export const userSchema = {
  firstName: Joi.string()
    .min(1)
    .max(30)
    .required(),
  lastName: Joi.string()
    .min(1)
    .max(30)
    .required(),
  emailId: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  password: Joi.string()
    .min(8)
    .required(),
  confirmPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "Password Mismatch" } } })
};

export const loginSchema = {
  emailId: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required(),
  password: Joi.string().required()
};
