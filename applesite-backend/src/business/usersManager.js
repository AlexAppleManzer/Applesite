const User = require('../models/userModel');
const mapper = require('../services/userMapperService');

module.exports = function usersManager() {
  async function getUser(id) {
    return User.findById(id);
  }

  async function createUser(dto) {
    const user = new User(mapper.dtoToEntity(dto));

    await user.save();
    // eslint-disable-next-line no-underscore-dangle
    return { _id: user._id };
  }

  function updateUser() {

  }

  function deleteUser() {

  }

  function queryUsers() {

  }
  return { getUser, createUser, updateUser, deleteUser, queryUsers };
}
