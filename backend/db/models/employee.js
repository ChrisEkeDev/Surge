'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    }
  }, {
    sequelize,
    modelName: 'Employee',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password']
      }
    },
  });
  return Employee;
};
