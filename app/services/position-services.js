// services/productService.js
const db = require("../models");
const Position = db.position;

class positionService {
  async create(positionData) {
    const position = {
      position_name: positionData.position_name,
    };

    return await Position.create(position);
  }

  async findAll() {
    return await Position.findAll();
  }

  async findOne(id) {
    return await Position.findByPk(id);
  }

  async update(id, positionData) {
    return await Position.update(positionData, { where: { position_id: id } });
  }

  async delete(id) {
    return await Position.destroy({ where: { position_id: id } });
  }
}

module.exports = new positionService();
