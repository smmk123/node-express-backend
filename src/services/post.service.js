const { Post } = require('../models');

/**
 * Create a product
 * @param {Object} postBody
 * @returns {Promise<User>}
 */
const createPost = async (postBody) => {
  // console.log(`service-${JSON.stringify(postBody)}`);
  return Post.create(postBody);
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
const queryPosts = async (filter, options) => {
  const posts = await Post.paginate(filter, options);
  return posts;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getPostById = async (id) => {
  return Post.findById(id);
};

const getPostByName = async (postName) => {
  return Post.find({ name: postName });
};

module.exports = {
  queryPosts,
  createPost,
  getPostById,
  getPostByName,
};
