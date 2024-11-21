const employeeService = require("../services/employee-services.js");

exports.create = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  try {
    const data = await employeeService.create(req.body);
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when adding a employee!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await employeeService.findAll();
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when getting all employees!",
    });
  }
};
exports.findOne = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const data = await employeeService.findOne(id);
    if (data) {
      res.send({
        data: data,
      });
    } else {
      res.status(404).send({
        message: "employee not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting employee by ID: " + id,
    });
  }
};

exports.update = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await employeeService.update(id, req.body);
    if (num[0] === 1) {
      res.send({
        message: "employee successfully updated.",
      });
    } else {
      res.send({
        message: "Update process failed.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating employee with ID: " + id,
    });
  }
};

exports.delete = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await employeeService.delete(id);
    if (num === 1) {
      res.send({
        message: "employee successfully deleted.",
      });
    } else {
      res.send({
        message: "Delete process failed!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete employee with ID: " + id,
    });
  }
};
function validateRequest(req) {
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!",
    });
    return;
  }
}
