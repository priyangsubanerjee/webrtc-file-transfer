const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

server.listen(process.env.PORT || 4000, () => {
  console.log("Server started on port 3000");
});
