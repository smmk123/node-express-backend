const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const postSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: {
    type: Number,
  },
  content: {
    type: String,
  },
});

// add plugin that converts mongoose to json
postSchema.plugin(toJSON);
postSchema.plugin(paginate);

const Post = mongoose.model('Post', postSchema);

/**
 * @typedef Post
 */

module.exports = Post;
