// server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create Order
router.post('/orders', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error });
    }
});

// Get All Orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', error });
    }
});

module.exports = router;
