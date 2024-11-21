module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    client_name: {
      type: Sequelize.STRING,
    },
    client_surname: {
      type: Sequelize.STRING,
    },
    client_address: {
      type: Sequelize.STRING,
    },
    client_phone: {
      type: Sequelize.STRING,
    },
  });

  return Client;
};
