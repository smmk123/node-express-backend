const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
  },
  price: {
    type: Number,
  },
  pictureURL: {
    type: String,
  },
  description: {
    type: String,
  },
});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Product', productSchema);

/**
 * @typedef Product
 */

module.exports = Product;
