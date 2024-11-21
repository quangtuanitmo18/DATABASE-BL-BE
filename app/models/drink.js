module.exports = (sequelize, Sequelize) => {
  const Drink = sequelize.define("drink", {
    drink_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drink_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    drink_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    drink_description: {
      type: Sequelize.STRING,
    },
    is_available: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });

  return Drink;
};
