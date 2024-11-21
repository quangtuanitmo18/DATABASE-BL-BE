// services/productService.js
const db = require("../models");
const Client = db.client;

class ClientService {
  // Add new product
  async create(clientData) {
    const client = {
      client_name: clientData.client_name,
      client_surname: clientData.client_surname,
      client_address: clientData?.client_address,
      client_phone: clientData?.client_phone,
    };

    return await Client.create(client);
  }

  // Find all products
  async findAll() {
    return await Client.findAll();
  }

  // Find product by ID
  async findOne(id) {
    return await Client.findByPk(id);
  }

  // Update product by ID
  async update(id, clientData) {
    return await Client.update(clientData, { where: { client_id: id } });
  }

  // Delete product by ID
  async delete(id) {
    return await Client.destroy({ where: { client_id: id } });
  }
}

module.exports = new ClientService();
