// app/routes/client-routes.js
const { jwtAuth } = require("../middleware/index.js");
const foodController = require("../controllers/food-controller.js");
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

router.post("/", [jwtAuth.verifyToken], foodController.create);
router.get("/", [jwtAuth.verifyToken], foodController.findAll);
router.get("/:id", [jwtAuth.verifyToken], foodController.findOne);
router.put("/:id", [jwtAuth.verifyToken], foodController.update);
router.delete("/:id", [jwtAuth.verifyToken], foodController.delete);

module.exports = router;
