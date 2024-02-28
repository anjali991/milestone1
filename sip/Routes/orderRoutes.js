const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/order', authMiddleware, orderController.placeOrder);
router.get('/orders', authMiddleware, orderController.getOrders);
router.put('/order/:id', authMiddleware, orderController.updateOrderStatus);

module.exports = router;



