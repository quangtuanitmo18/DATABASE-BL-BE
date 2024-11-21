// services/productService.js
const db = require("../models");
const Food = db.food;

class FoodService {
  async create(foodData) {
    const food = {
      food_name: foodData.food_name,
      food_price: foodData.food_price,
      food_description: foodData?.food_description,
      is_available: foodData?.is_available,
    };

    return await Food.create(food);
  }

  async findAll() {
    return await Food.findAll();
  }

  async findOne(id) {
    return await Food.findByPk(id);
  }

  async update(id, foodData) {
    return await Food.update(foodData, { where: { food_id: id } });
  }

  async delete(id) {
    return await Food.destroy({ where: { food_id: id } });
  }
}

module.exports = new FoodService();
