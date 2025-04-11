const { getAllPlayers, createPlayerDb } = require("../db/players.db");

const getPlayers = async (req, res) => {
  const users = await getAllPlayers();
  res.send(users);
};

const createUser = async (req, res) => {
  console.log("FLAG Controller");
  
  const { name } = req.body;
  const response = await createPlayerDb({name});
  res.send(response);
};

module.exports = {
  getPlayers,
  createUser,
};
