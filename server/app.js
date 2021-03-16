let express = require("express");
const { initializeMongooseConnection } = require("./modules");
let app = express();

//write your logic here
initializeMongooseConnection();

module.exports = app;
