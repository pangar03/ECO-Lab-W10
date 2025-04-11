const express = require("express");
const path = require("path");
const { createServer } = require("http");

const usersRouter = require("./server/routes/players.router");
const gameRouter = require("./server/routes/game.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = 5050;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/player-app", express.static(path.join(__dirname, "player_app")));
app.use("/narrator-app", express.static(path.join(__dirname, "narrator_app")));

// Routes
app.use("/", usersRouter);
app.use("/", gameRouter);

// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
