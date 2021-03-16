const userService = require("./user.service");

const getUser = (id) => {
  return userService.getUser(id);
};

const addUser = (user) => {
  return userService.addUser(user);
};

const loginUser = (user) => {
  return userService.loginUser(user);
};

module.exports = {
  getUser,
  addUser,
  loginUser,
};
