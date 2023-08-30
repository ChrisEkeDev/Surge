'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [
      {// 1
        firstName: 'Chris',
        lastName: 'Eke',
        email: 'chris@email.com',
        password: bcrypt.hashSync('password', 13)
      },
      {// 2
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@email.com',
        password: bcrypt.hashSync('password', 13)
      },
      {// 3
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@email.com',
        password: bcrypt.hashSync('password', 13)
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options)
  }
};
