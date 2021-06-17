import { Server } from "socket.io";
import { createServer } from "http";

const PORT = 4001;

const server = createServer();
const io = new Server(server, { cors: "*" });

io.on(`connection`, (socket) => {
  console.log(`client connected ${socket.id}`);

  socket.on("message", (e) => {
    io.emit("message", `${socket.id} - ${e}`);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

//ws
// import WebSocket from "ws";

// const PORT = 4000;

// const server = new WebSocket.Server({ port: PORT });

// server.on("connection", (socket) => {
//   console.log("someone connected");

//   socket.on("message", (data) => {
//     console.log(`message from client`, data);

//     socket.send("Heyyy");
//   });
// });
