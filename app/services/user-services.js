// services/user.service.js
const database = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const configuration = require("../config/config-jwt.js");

const User = database.user;

exports.signup = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  return user;
};

exports.signin = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ id: user.id }, configuration.secret, {
    expiresIn: 86400,
  });

  return { user, token };
};
