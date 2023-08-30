'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Vehicles';
    await queryInterface.bulkInsert(options, [
      {// 1
        userId: 1,
        chargerId: 3,
        make: 'BMW',
        model: 'i4',
        year: 2023
      },
      {// 2
        userId: 2,
        chargerId: 5,
        make: 'Nissan',
        model: 'Leaf',
        year: 2023
      },
      {// 3
        userId: 3,
        chargerId: 6,
        make: 'Tesla',
        model: 'Model X',
        year: 2023
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Vehicles';
    await queryInterface.bulkDelete(options)
  }
};
