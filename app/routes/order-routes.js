// app/routes/client-routes.js
const { jwtAuth } = require("../middleware/index.js");
const orderController = require("../controllers/order-controller.js");
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

router.post("/", [jwtAuth.verifyToken], orderController.create);
router.get("/", [jwtAuth.verifyToken], orderController.findAll);
router.get("/:id", [jwtAuth.verifyToken], orderController.findOne);
router.put("/:id", [jwtAuth.verifyToken], orderController.update);
router.delete("/:id", [jwtAuth.verifyToken], orderController.delete);

module.exports = router;
