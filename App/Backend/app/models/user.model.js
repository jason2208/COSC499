const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.BOOLEAN
      }, region: {
        type: Sequelize.STRING
      }
    },{ tableName: 'users'
});
    return user;
  };
