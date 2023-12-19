import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import userRouter from "./routes/user.routes";
import bodyParser from "body-parser";

const app = express();
const htppServer = createServer(app);
const io = new Server(htppServer, {cors: {origin: "*"}});

io.on("connection", (socket) =>{
  socket.emit("Hello", "World");
})

app.use(bodyParser.urlencoded({extended: true}));
app.use('/auth', userRouter);

const port = Number(process.env.PORT) || 3000;
htppServer.listen(port, ()=>{
  console.log("App on server port: ", port);
});
