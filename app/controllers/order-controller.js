const orderService = require("../services/order-services.js");

exports.create = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  try {
    const data = await orderService.create(req.body);
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when adding a order!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await orderService.findAll();
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when getting all orders!",
    });
  }
};
exports.findOne = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const data = await orderService.findOne(id);
    if (data) {
      res.send({
        data: data,
      });
    } else {
      res.status(404).send({
        message: "order not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting order by ID: " + id,
    });
  }
};

exports.update = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await orderService.update(id, req.body);
    if (num[0] === 1) {
      res.send({
        message: "order successfully updated.",
      });
    } else {
      res.send({
        message: "Update process failed.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating order with ID: " + id,
    });
  }
};

exports.delete = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await orderService.delete(id);
    if (num === 1) {
      res.send({
        message: "order successfully deleted.",
      });
    } else {
      res.send({
        message: "Delete process failed!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete order with ID: " + id,
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
