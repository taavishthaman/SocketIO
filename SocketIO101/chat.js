const express = require("express");
const app = express();
//require('socket').io is Server
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8001);
//io is the server object in the docs
const io = socketio(expressServer);

io.on("connection", (socket) => {
  //   socket.emit("messageFromServer", {
  //     data: "Welcome to the socket server!",
  //   });

  socket.on("newMessageToServer", (dataFromClient) => {
    io.emit("newMessageToClients", { text: dataFromClient.text });
  });
});
