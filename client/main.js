const message = document.getElementById("message");
const msgInput = document.getElementById("msg-input");
const sendBtn = document.getElementById("send");
const chatboxUl = document.getElementById("chat-box");

const socket = io(`ws://localhost:4001`);

socket.on("connect", () => {
  console.log(`connection established`);
});

sendBtn.addEventListener("click", () => {
  socket.send(msgInput.value);
});

socket.on("message", (e) => {
  addMessage(e);
  console.log(e);
});

function addMessage(message) {
  const newMessage = document.createElement("li");
  newMessage.innerText = message;
  chatboxUl.appendChild(newMessage);
}

//using ws package and websocket api for the client side
// const socket = new WebSocket("ws://localhost:4000");
// socket.onopen = (e) => {
//   socket.send(msgInput.value);
// };

// socket.addEventListener("message", (e) => {
//   console.log(e);
//   message.innerHTML = e.data;
// });

// sendBtn.addEventListener("click", (e) => {
//   //   console.log(msgInput.value);
//   socket.send(msgInput.value);
// });
