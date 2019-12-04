const express = require('express');

const router = express.Router();

const Users = require("./userDb");

// middlewares
const validateUser = require("../middlewares/validateUser");

router.post('/', validateUser, (req, res) => {
  // do your magic!
  const user = req.body;
  Users.insert(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "server error", err });
  })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(users => {
      if (users.length) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "There are no users." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Server error", err });
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
