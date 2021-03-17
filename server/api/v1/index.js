const router = require("express").Router();

//write your routes here
router.use("/v1/users", require("./user"));
router.use("/v1/notes", require("./note"));

module.exports = router;
