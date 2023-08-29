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
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('password123', 13)
      },
      {// 2
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@email.com',
        password: bcrypt.hashSync('secure456', 13)
      },
      {// 3
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael@email.com',
        password: bcrypt.hashSync('pass123word', 13)
      },
      {// 4
        firstName: 'Emily',
        lastName: 'Williams',
        email: 'emily@email.com',
        password: bcrypt.hashSync('strongpass789', 13)
      },
      {// 5
        firstName: 'David',
        lastName: 'Brown',
        email: 'david@email.com',
        password: bcrypt.hashSync('secretword567', 13)
      },
      {// 6
        firstName: 'Sarah',
        lastName: 'Jones',
        email: 'sarah@email.com',
        password: bcrypt.hashSync('mypassword987', 13)
      },
      {// 7
        firstName: 'Daniel',
        lastName: 'Davis',
        email: 'daniel@email.com',
        password: bcrypt.hashSync('daniel1234', 13)
      },
      {// 8
        firstName: 'Olivia',
        lastName: 'Miller',
        email: 'olivia@email.com',
        password: bcrypt.hashSync('olivia4567', 13)
      },
      {// 9
        firstName: 'James',
        lastName: 'Wilson',
        email: 'james@email.com',
        password: bcrypt.hashSync('jamespass987', 13)
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options)
  }
};
