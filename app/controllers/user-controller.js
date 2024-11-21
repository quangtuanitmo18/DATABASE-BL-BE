// controllers/user.controller.js
const userService = require("../services/user-services.js");

exports.signup = async (req, res) => {
  try {
    console.log("Request: ", req.body);
    validateRequest(req);

    await userService.signup(req.body.username, req.body.password);
    return res.send({ message: "User successfully registered" });
  } catch (exception) {
    return res.status(500).send({ message: exception.message });
  }
};

exports.signin = async (req, res) => {
  try {
    validateRequest(req);

    const { user, token } = await userService.signin(
      req.body.username,
      req.body.password
    );
    return res.status(200).send({
      data: {
        user_id: user.user_id,
        username: user.username,
        roles: user.roles,
        accessToken: token,
      },
    });
  } catch (err) {
    return res
      .status(err.message === "User not found" ? 404 : 401)
      .send({ message: err.message });
  }
};

function validateRequest(req) {
  if (!req.body) {
    throw new Error("Request can't be empty!");
  }
}
