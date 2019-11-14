const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// TODO uncomment ALL

// const logger = require('../middleware/logger');

const loginRouter = require("../auth/login-router.js");
const registerRouter = require("../auth/register-router.js");
const usersRouter = require("../users/user-router");

const server = express();

server.use(helmet());
// server.use(logger);
server.use(express.json());
server.use(cors());

server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("<h1>yikes</h1>");
});

module.exports = server;