/* eslint-disable no-console */
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const ApiError = require('../utils/ApiError');

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productService.queryProducts(filter, options);
  res.send(result);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const getProductByName = catchAsync(async (req, res) => {
  const product = await productService.getProductByName(req.params.name);
  console.log(req.params.name);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

const createProduct = catchAsync(async (req, res) => {
  console.log(`pre-${JSON.stringify(req.body)}`);
  const product = await productService.createProduct(req.body);
  console.log(`post-${JSON.stringify(req.body)}`);
  res.status(httpStatus.CREATED).send(product);
});

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  getProductByName,
};
