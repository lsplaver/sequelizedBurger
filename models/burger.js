'use strict';
// sequelize.sync();
module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.DATE.NOW,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.DATE.NOW,
      allowNull: false
    }
  }, {});
  Burgers.associate = function (models) {
    // associations can be defined here
  };
  return Burgers;
};