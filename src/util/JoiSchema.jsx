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
