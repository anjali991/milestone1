const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/foods', foodController.getAllFoods);
router.post('/food', authMiddleware, foodController.addFood);
router.get('/food/:id', foodController.getFoodById);
router.get('/foods/:category', foodController.getFoodsByCategory);

module.exports = router;
