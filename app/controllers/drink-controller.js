const drinkService = require("../services/drink-services.js");

exports.create = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  try {
    const data = await drinkService.create(req.body);
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when adding a drink!",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await drinkService.findAll();
    res.send({
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error when getting all drinks!",
    });
  }
};
exports.findOne = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const data = await drinkService.findOne(id);
    if (data) {
      res.send({
        data: data,
      });
    } else {
      res.status(404).send({
        message: "drink not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error when getting drink by ID: " + id,
    });
  }
};

exports.update = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await drinkService.update(id, req.body);
    if (num[0] === 1) {
      res.send({
        message: "drink successfully updated.",
      });
    } else {
      res.send({
        message: "Update process failed.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating drink with ID: " + id,
    });
  }
};

exports.delete = async (req, res) => {
  console.log("Request : ", req.body);
  validateRequest(req);

  const id = req.params.id;
  try {
    const num = await drinkService.delete(id);
    if (num === 1) {
      res.send({
        message: "drink successfully deleted.",
      });
    } else {
      res.send({
        message: "Delete process failed!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete drink with ID: " + id,
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
