// services/productService.js
const db = require("../models");
const Order = db.order;

class orderService {
  // Add new product
  async create(orderData) {
    const order = {
      order_time: orderData?.order_time,
      order_status: orderData?.order_status,
      employee_id: orderData?.employee_id,
      client_id: orderData?.client_id,
    };

    return await Order.create(order);
  }

  // Find all products
  async findAll() {
    return await Order.findAll();
  }

  // Find product by ID
  async findOne(id) {
    return await Order.findByPk(id);
  }

  // Update product by ID
  async update(id, orderData) {
    return await Order.update(orderData, { where: { order_id: id } });
  }

  // Delete product by ID
  async delete(id) {
    return await Order.destroy({ where: { order_id: id } });
  }
}

module.exports = new orderService();
