let express = require("express");
const bodyparser = require("body-parser");
const { initializeMongooseConnection } = require("./modules");
let app = express();
const api = require("./api/v1");

//write your logic here
initializeMongooseConnection();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api", api);

module.exports = app;
