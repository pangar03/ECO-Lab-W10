const express = require("express");
const { notificarDia, notificarNoche } = require("../controllers/game.controller");
const router = express.Router();

router.post("/notificar-dia", notificarDia);
router.post("/notificar-noche", notificarNoche);

module.exports = router;