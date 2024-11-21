// app/routes/client-routes.js
const { jwtAuth } = require("../middleware/index.js");
const drinkController = require("../controllers/drink-controller.js");
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

router.post("/", [jwtAuth.verifyToken], drinkController.create);
router.get("/", [jwtAuth.verifyToken], drinkController.findAll);
router.get("/:id", [jwtAuth.verifyToken], drinkController.findOne);
router.put("/:id", [jwtAuth.verifyToken], drinkController.update);
router.delete("/:id", [jwtAuth.verifyToken], drinkController.delete);

module.exports = router;
