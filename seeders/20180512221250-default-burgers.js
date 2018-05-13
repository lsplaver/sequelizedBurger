'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers', [{
      burger_name: 'Mega Burger',
      devoured: false,
      createdAt: new Date(),
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
