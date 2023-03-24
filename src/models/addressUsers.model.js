const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const AddressUsers = db.define('address_users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
},{
    timestamps: false,
    updatedAt: false,
    
});

module.exports = AddressUsers;