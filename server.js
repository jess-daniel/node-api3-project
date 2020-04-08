const express = require('express');

const userRouter = require("./users/userRouter");
const logger = require("./middlewares/logger");

const server = express();

// middlewares
server.use(logger);
server.use(express.json());

// Routers
server.use("/api/users", userRouter);


module.exports = server;
