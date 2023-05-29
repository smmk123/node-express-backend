const { Product } = require('../models');

/**
 * Create a product
 * @param {Object} productBody
 * @returns {Promise<User>}
 */
const createProduct = async (productBody) => {
  return Product.create(productBody);
};
/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getProductById = async (id) => {
  return Product.findById(id);
};

const getProductByName = async (productName) => {
  return Product.find({ name: productName });
};

module.exports = {
  queryProducts,
  createProduct,
  getProductById,
  getProductByName,
};
