const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const UsersData = db.define('users_data', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  addressUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'address_user_id',
  },
},{
  timestamps: false,
  updatedAt: false,
});

module.exports = UsersData;