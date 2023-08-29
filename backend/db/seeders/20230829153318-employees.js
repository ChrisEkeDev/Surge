'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Employees';
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Alex',
        lastName: 'Johnson',
        email: 'alex@email.com',
        password: bcrypt.hashSync('employee123', 13)
      },
      {
        firstName: 'Ella',
        lastName: 'Garcia',
        email: 'ella@email.com',
        password: bcrypt.hashSync('employee456', 13)
      },
      {
        firstName: 'William',
        lastName: 'Brown',
        email: 'william@email.com',
        password: bcrypt.hashSync('employee789', 13)
      },
      {
        firstName: 'Ava',
        lastName: 'Martinez',
        email: 'ava@email.com',
        password: bcrypt.hashSync('employee234', 13)
      },
      {
        firstName: 'Liam',
        lastName: 'Smith',
        email: 'liam@email.com',
        password: bcrypt.hashSync('employee567', 13)
      },
      {
        firstName: 'Mia',
        lastName: 'Taylor',
        email: 'mia@email.com',
        password: bcrypt.hashSync('employee890', 13)
      },
      {
        firstName: 'Noah',
        lastName: 'Wilson',
        email: 'noah@email.com',
        password: bcrypt.hashSync('employee1234', 13)
      },
      {
        firstName: 'Sophia',
        lastName: 'Anderson',
        email: 'sophia@email.com',
        password: bcrypt.hashSync('employee5678', 13)
      },
      {
        firstName: 'Jackson',
        lastName: 'Lopez',
        email: 'jackson@email.com',
        password: bcrypt.hashSync('employee9012', 13)
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Employees';
    await queryInterface.bulkDelete(options)
  }
};
