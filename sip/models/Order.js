const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered'],
    default: 'pending',
  },
  address: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    enum: ['cash', 'card', 'UPI'],
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);

