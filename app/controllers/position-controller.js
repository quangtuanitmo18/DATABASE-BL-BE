const positionService = require("../services/position-services.js");

exports.create = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  try {
    const data = await positionService.create(req.body);
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when adding a position!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await positionService.findAll();
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when getting all positions!",
    });
  }
};
exports.findOne = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const data = await positionService.findOne(id);
    if (data) {
      res.send({
        data: data,
      });
    } else {
      res.status(404).send({
        message: "position not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting position by ID: " + id,
    });
  }
};

exports.update = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await positionService.update(id, req.body);
    if (num[0] === 1) {
      res.send({
        message: "position successfully updated.",
      });
    } else {
      res.send({
        message: "Update process failed.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating position with ID: " + id,
    });
  }
};

exports.delete = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await positionService.delete(id);
    if (num === 1) {
      res.send({
        message: "position successfully deleted.",
      });
    } else {
      res.send({
        message: "Delete process failed!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete position with ID: " + id,
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
