const Joi = require('joi');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    date: Joi.number().required(),
    content: Joi.string().required(),
  }),
};

const getPosts = {
  query: Joi.object().keys({
    name: Joi.string(),
    stock: Joi.number(),
    price: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  getPosts,
  createPost,
};
