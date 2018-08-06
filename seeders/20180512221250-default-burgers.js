'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [{
      burger_name: 'Mega Burger',
      devoured: false,
      createdAt: Sequelize.DATE,
      updatedAt: new Date()
    },
    {
      burger_name: 'BLT',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      burger_name: 'Spicy Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
