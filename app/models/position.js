module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("position", {
    position_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    position_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Position;
};
