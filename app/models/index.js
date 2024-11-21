const configuration = require("../config/config-db.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  configuration.DB,
  configuration.USER,
  configuration.PASSWORD,
  {
    host: configuration.HOST,
    dialect: configuration.dialect,
    pool: {
      max: configuration.pool.max,
      min: configuration.pool.min,
      acquire: configuration.pool.acquire,
      idle: configuration.pool.idle,
    },
  }
);

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;
database.user = require("./user.js")(sequelize, Sequelize);
database.drink = require("./drink.js")(sequelize, Sequelize);
database.position = require("./position.js")(sequelize, Sequelize);
database.client = require("./client.js")(sequelize, Sequelize);
database.food = require("./food.js")(sequelize, Sequelize);
database.employee = require("./employee.js")(sequelize, Sequelize);
database.order = require("./order.js")(sequelize, Sequelize);

module.exports = database;
