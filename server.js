const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*",
};

const db = require("./app/models");
db.sequelize.sync();

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "This is a simple CRUD project using node js and postgres sql",
  });
});
// require("./app/routes/product-routes")(app);
// require("./app/routes/user-routes")(app);
app.use("/api/v1/client", require("./app/routes/client-routes"));
app.use("/api/v1/user", require("./app/routes/user-routes"));
app.use("/api/v1/drink", require("./app/routes/drink-routes"));
app.use("/api/v1/food", require("./app/routes/food-routes"));
app.use("/api/v1/position", require("./app/routes/position-routes"));
app.use("/api/v1/employee", require("./app/routes/employee-routes"));
app.use("/api/v1/order", require("./app/routes/order-routes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Running on port ", PORT);
});
