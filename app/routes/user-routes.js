// app/routes/user-routes.js
const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middleware");
const userControllers = require("../controllers/user-controller.js");

// Middleware for setting headers
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization",
    "Origin, Content-Type, Accept"
  );
  next();
});

// User registration
router.post(
  "/register",
  [verifyUser.checkExistingUsername],
  userControllers.signup
);

// User login
router.post("/login", userControllers.signin);

module.exports = router;
