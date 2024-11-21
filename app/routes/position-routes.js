// app/routes/position-routes.js
const { jwtAuth } = require("../middleware/index.js");
const positionController = require("../controllers/position-controller.js");
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

router.post("/", [jwtAuth.verifyToken], positionController.create);
router.get("/", [jwtAuth.verifyToken], positionController.findAll);
router.get("/:id", [jwtAuth.verifyToken], positionController.findOne);
router.put("/:id", [jwtAuth.verifyToken], positionController.update);
router.delete("/:id", [jwtAuth.verifyToken], positionController.delete);

module.exports = router;
