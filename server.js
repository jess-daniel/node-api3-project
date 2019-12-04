const express = require('express');

const userRouter = require("./users/userRouter");
const logger = require("./middlewares/logger");

const port = 5000;

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// middlewares
server.use(logger);
server.use(express.json());

// Routers
server.use("/api/users", userRouter);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

module.exports = server;
