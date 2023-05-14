/* eslint-disable no-undef */
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');

const getPosts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await postService.queryPosts(filter, options);
  res.send(result);
});

const getPost = catchAsync(async (req, res) => {
  const post = await postService.getProductById(req.params.postId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(post);
});

const getPostByName = catchAsync(async (req, res) => {
  const post = await postService.getPostByName(req.params.name);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(post);
});

const createPost = catchAsync(async (req, res) => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

module.exports = {
  getPosts,
  createPost,
  getPost,
  getPostByName,
};
