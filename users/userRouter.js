const express = require('express');

const router = express.Router();

// Database functions
const Users = require("./userDb");
const Posts = require("../posts/postDb");

// middlewares
const validateUser = require("../middlewares/validateUser");
const validateUserId = require("../middlewares/validateUserId");
const validatePost = require("../middlewares/validatePost");

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

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  const { id } = req.user;
  const postData = { ...req.body, user_id: id };
  Posts.insert(postData)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ message: "serer error", err });
  })

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

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  Posts.get(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "No posts were found for this user" });
    }
  })
    .catch(err => {
      res.status(500).json({ message: "server error", err });
  })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.user;
  const user = req.user;
  Users.remove(id)
    .then(removed => {
      res.status(200).json({ message: "User removed successfully", user });
    })
    .catch(err => {
      res.status(500).json({ message: "server error", err });
  })
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // do your magic!
  const changes = req.body;
  const { id } = req.user;
  const updatedUser = { ...changes, id };
  Users.update(id, changes)
    .then(user => {
      res.status(200).json({ message: "User updated successfully", updatedUser });
    })
    .catch(err => {
      res.status(500).json({ message: "server error", err });
  })
});

module.exports = router;
