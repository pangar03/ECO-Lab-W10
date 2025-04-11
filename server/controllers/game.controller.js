const { getAllPlayers } = require("../db/players.db");
const { emitEvent } = require("../services/socket.service");

const notificarDia = async (req, res) => {
    console.log("RUNNING DAY NOTIFICATION");
    players = await getAllPlayers();
    console.log(players);
    if(players.length !== 4){
        res.send({message: "There are not enough players"});
    } else {
        res.send({message: 'Notifying Day'})
        emitEvent('notificar-dia', {message: 'It`s Day Time', players});
    }
}

const notificarNoche = async (req, res) => {
    console.log("RUNNING NIGHT NOTIFICATION");
    players = await getAllPlayers();
    console.log(players);
    if(players.length !== 4){
        res.send({message: "There are not enough players"});
    } else {
        res.send({message: 'Notifying Night'})
        emitEvent('notificar-noche', {message: 'It`s Night Time', players})
    }
}

module.exports = {
    notificarDia,
    notificarNoche,
}