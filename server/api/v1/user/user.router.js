const router = require("express").Router();
const userController = require("./user.controller");

router.get("/:id", (req, res) => {
  userController
    .getUser(req.params.id)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.post("/register", (req, res) => {
  userController
    .addUser(req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.post("/login", (req, res) => {
  userController
    .loginUser(req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

module.exports = router;
