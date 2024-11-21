// app/routes/client-routes.js
const { jwtAuth } = require("../middleware");
const clientController = require("../controllers/client-controller.js");
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

router.post("/", [jwtAuth.verifyToken], clientController.create);
router.get("/", [jwtAuth.verifyToken], clientController.findAll);
router.get("/:id", [jwtAuth.verifyToken], clientController.findOne);
router.put("/:id", [jwtAuth.verifyToken], clientController.update);
router.delete("/:id", [jwtAuth.verifyToken], clientController.delete);

module.exports = router;
