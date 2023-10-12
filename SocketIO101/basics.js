const express = require("express");
const app = express();
const socketio = require("socket.io");
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  //In ws we use send method and in socketio we use emit method
  socket.emit("messageFromServer", {
    data: "Welcome to the socket server!",
  });

  socket.on("messageFromClient", (data) => {
    console.log(data);
  });
});
