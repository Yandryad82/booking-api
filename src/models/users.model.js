const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userDataId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_data_id',
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rol_id',
    },
  },{
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at',
  });

module.exports = Users;