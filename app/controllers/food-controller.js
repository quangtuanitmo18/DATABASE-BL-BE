const foodService = require("../services/food-services.js");

exports.create = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  try {
    const data = await foodService.create(req.body);
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when adding a food!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await foodService.findAll();
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when getting all foods!",
    });
  }
};
exports.findOne = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const data = await foodService.findOne(id);
    if (data) {
      res.send({
        data: data,
      });
    } else {
      res.status(404).send({
        message: "food not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting food by ID: " + id,
    });
  }
};

exports.update = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await foodService.update(id, req.body);
    if (num[0] === 1) {
      res.send({
        message: "food successfully updated.",
      });
    } else {
      res.send({
        message: "Update process failed.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating food with ID: " + id,
    });
  }
};

exports.delete = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await foodService.delete(id);
    if (num === 1) {
      res.send({
        message: "food successfully deleted.",
      });
    } else {
      res.send({
        message: "Delete process failed!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete food with ID: " + id,
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
