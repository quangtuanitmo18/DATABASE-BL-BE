// app/routes/employee-routes.js
const { jwtAuth } = require("../middleware");
const employeeController = require("../controllers/employee-controller.js");
const express = require("express");
const router = express.Router();

// Middleware for setting headers
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization",
    "Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", [jwtAuth.verifyToken], employeeController.create);
router.get("/", [jwtAuth.verifyToken], employeeController.findAll);
router.get("/:id", [jwtAuth.verifyToken], employeeController.findOne);
router.put("/:id", [jwtAuth.verifyToken], employeeController.update);
router.delete("/:id", [jwtAuth.verifyToken], employeeController.delete);

module.exports = router;
