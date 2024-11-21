module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    order_status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employee_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "employees",
        key: "employee_id",
      },
    },
    client_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "clients",
        key: "client_id",
      },
    },
  });

  return Order;
};
