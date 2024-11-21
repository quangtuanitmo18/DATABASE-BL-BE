module.exports = (sequelize, Sequelize) => {
  const Food = sequelize.define("food", {
    food_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    food_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    food_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    food_description: {
      type: Sequelize.STRING,
    },
    is_available: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });

  return Food;
};
