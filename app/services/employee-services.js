// services/productService.js
const db = require("../models");
const Employee = db.employee;

class employeeService {
  async create(employeeData) {
    const employee = {
      employee_name: employeeData.employee_name,
      employee_surname: employeeData?.employee_surname,
      employee_position: employeeData?.employee_position,
      employee_schedule: employeeData?.employee_schedule,
      position_id: employeeData?.position_id,
    };

    return await Employee.create(employee);
  }

  async findAll() {
    return await Employee.findAll();
  }

  async findOne(id) {
    return await Employee.findByPk(id);
  }

  async update(id, employeeData) {
    return await Employee.update(employeeData, { where: { employee_id: id } });
  }

  async delete(id) {
    return await Employee.destroy({ where: { employee_id: id } });
  }
}

module.exports = new employeeService();
