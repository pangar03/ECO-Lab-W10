let players = [];

const roles = ["villager", "wolf", "villager", "wolf"];

const randomizeRoles = roles.sort(() => Math.random() - 0.5);

const getAllPlayers = async () => {
  return players;
};

const createPlayerDb = async (player) => {
  if(players.length < 4){
    const id = players.length;
    const role = randomizeRoles[id];
    players.push({ id, ...player, role});
    return { message: "201", id, playersCounter: players.length, role };
  } else {
    return { message: "No hay cupo" };
  }
};

module.exports = {
  getAllPlayers,
  createPlayerDb,
};
