'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Contacts', [{
    firstname: 'Marluan',
    lastname: 'EspirituSanto',
    phone: '04125686862',
    email:'marluan@gmail.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()

  },
  {
    firstname: 'Eric',
    lastname: 'Jiminez',
    phone: '04262194765',
    email:'eric@gmail.com',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()

  }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
