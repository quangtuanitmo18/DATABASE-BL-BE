const database = require("../models");
const User = database.user;

checkExistingUsername = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user) {
        res.status(400).send({
          message: "Username already used!",
        });
        return;
      }
      next();
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

const verifyUser = {
  checkExistingUsername: checkExistingUsername,
};

module.exports = verifyUser;
