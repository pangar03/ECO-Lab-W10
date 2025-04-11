const express = require("express");
const { createUser, getPlayers } = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", getPlayers);

router.post("/join-game", createUser);

module.exports = router;
