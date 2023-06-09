const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Categories = db.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
},{
  timestamps: false, 
  updatedAt: false,
});

module.exports = Categories;