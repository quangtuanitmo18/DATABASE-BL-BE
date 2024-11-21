// services/productService.js
const db = require("../models");
const Drink = db.drink;

class DrinkService {
  async create(drinkData) {
    const drink = {
      drink_name: drinkData.drink_name,
      drink_price: drinkData.drink_price,
      drink_description: drinkData?.drink_description,
      is_available: drinkData?.is_available,
    };

    return await Drink.create(drink);
  }

  async findAll() {
    return await Drink.findAll();
  }

  async findOne(id) {
    return await Drink.findByPk(id);
  }

  async update(id, drinkData) {
    return await Drink.update(drinkData, { where: { drink_id: id } });
  }

  async delete(id) {
    return await Drink.destroy({ where: { drink_id: id } });
  }
}

module.exports = new DrinkService();
