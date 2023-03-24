const Users = require('./users.model');
const UsersData = require('./usersData.model');
const AddressUsers = require('./addressUsers.model');
const PostsRents = require('./postsRents.model');
const Rols = require('./rols.model');
const RentData = require('./rentData.model');
const AddressRoom = require('./addressRooms.model');
const Category = require('./categories.model');

const initModels = () => {
  Users.hasMany(PostsRents, { foreignKey: 'postAtUser' });  
  PostsRents.belongsTo(Users, { foreignKey: 'postAtUser' });

  Users.hasMany(UsersData, { foreignKey: 'userDataId' });
  UsersData.belongsTo(Users, { foreignKey: 'userDataId' });

  UsersData.hasMany(AddressUsers, { foreignKey: 'addressUsersId' });
  AddressUsers.belongsTo(UsersData, { foreignKey: 'addressUsersId' });

  Users.hasMany(Rols, { foreignKey: 'rolId' });
  Rols.belongsTo(Users, { foreignKey: 'rolId' });

  Category.hasMany(PostsRents, { foreignKey: 'categoryId' });
  PostsRents.belongsTo(Category, { foreignKey: 'categoryId' });

  RentData.hasMany(PostsRents, { foreignKey: 'rentDataId' });
  PostsRents.belongsTo(RentData, { foreignKey: 'rentDataId' });

  RentData.hasOne(AddressRoom, { foreignKey: 'addressRoomId' });
  AddressRoom.belongsTo(RentData, { foreignKey: 'addressRoomId' });
};

module.exports = initModels;
