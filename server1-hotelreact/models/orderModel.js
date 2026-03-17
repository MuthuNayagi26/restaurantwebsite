// server/models/orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    note: String,
    location: String,
    items: [
        {
            name: String,
            quantity: Number,
        },
    ],
    paymentMode: String,
    totalAmount: Number,
    orderDate: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
