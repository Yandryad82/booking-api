const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Rols = db.define('rols', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
},{
  timestamps: false,
  updatedAt: false,
});

module.exports = Rols;