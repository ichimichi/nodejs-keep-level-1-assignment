const router = require("express").Router();
const noteController = require("./note.controller");

router.post("/", (req, res) => {
  noteController
    .addNote(req.body, req.query.userId)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.get("/", (req, res) => {
  noteController
    .getAllNotes(req.query.userId)
    .then((response) => {
      res.status(response.status).send(response.notes);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

router.put("/:id", (req, res) => {
  noteController
    .updateNote(req.params.id, req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((e) => {
      res.status(e.status).send(e);
    });
});

module.exports = router;
