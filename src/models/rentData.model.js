const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const RentData = db.define('rent_data', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  photos: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  numberOfRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'number_of_rooms',
  },
  numberOfBathrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'number_of_bathrooms',
  },
  addressRoomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'address_room_id',
  },
},{
  timestamps: false,
  updatedAt: false,

});

module.exports = RentData;

