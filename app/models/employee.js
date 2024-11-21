module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    employee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_name: {
      type: Sequelize.STRING,
    },
    employee_surname: {
      type: Sequelize.STRING,
    },
    employee_position: {
      type: Sequelize.STRING,
    },
    employee_schedule: {
      type: Sequelize.STRING,
    },
    position_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "positions",
        key: "position_id",
      },
    },
  });

  return Employee;
};
