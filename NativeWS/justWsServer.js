const http = require("http");
//ws is a third pparty module and http is a core module
const webocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("I am connected!");
});

const wss = new webocket.WebSocketServer({ server });

// wss.on("headers", (headers, req) => {
//   console.log(headers);
// });

wss.on("connection", (ws, req) => {
  ws.send("Welcome to the websocket server!!!");
  ws.on("message", (data) => {
    console.log(data.toString());
  });
});
server.listen(8000);
