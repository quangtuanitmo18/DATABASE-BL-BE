module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roles: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: [],
    },
  });

  return User;
};
