const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const PostsRents = db.define('posts_rents', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  postAtUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'post_user',
  },
  rentDataId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'rent_data',
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
  },
},{
  timestamps: true,
  updatedAt: false,
  createdAt: 'posted_at',
    
});

module.exports = PostsRents;