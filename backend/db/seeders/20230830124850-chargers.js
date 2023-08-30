'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Chargers';
    await queryInterface.bulkInsert(options, [
      {// 1
        key: "sae_j17772",
        identifier: 30,
        name: "SAE J1772"
      },
      {// 2
        key: "type_2_mennekes",
        identifier: 31,
        name: "Type 2 Mennekes"
      },
      {// 3
        key: "type_1_css_1",
        identifier: 33,
        name: "Type 1 CSS Combo 1"
      },
      {// 4
        key: "type_2_css_2",
        identifier: 34,
        name: "Type 2 CSS Combo 2"
      },
      {// 5
        key: "chademo",
        identifier: 29,
        name: "CHAdeMO"
      },
      {// 6
        key: "tesla",
        identifier: 43,
        name: "Tesla"
      },
      {// 7
        key: "gb_t_ac",
        identifier: 52,
        name: "GB/T AC"
      },
      {// 8
        key: "gb_t_dc",
        identifier: 53,
        name: "GB/T DC"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Chargers';
    await queryInterface.bulkDelete(options)
  }
};
