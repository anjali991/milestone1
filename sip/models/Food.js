const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['veg', 'non-veg', 'dessert'],
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Food', foodSchema);
