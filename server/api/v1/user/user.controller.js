const userService = require("./user.service");

const addUser = (user) => {
  return userService.addUser(user);
};

const loginUser = (user) => {
  return userService.loginUser(user);
};

module.exports = {
  addUser,
  loginUser,
};
