const router = require("express").Router();

//write your routes here
router.use("/v1/users", require("./user/user.router"));

module.exports = router;
