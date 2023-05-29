const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    stock: Joi.number().required(),
    price: Joi.number().required(),
    pictureURL: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    stock: Joi.number(),
    price: Joi.number(),
    pictureURL: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  getProducts,
  createProduct,
};
