const userDAO = require("./user.dao");

const addUser = (user) => {
  return userDAO.addUser(user);
};

const loginUser = (user) => {
  return userDAO.loginUser(user);
};

module.exports = {
  addUser,
  loginUser,
};
