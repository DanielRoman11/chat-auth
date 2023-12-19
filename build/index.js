"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const htppServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(htppServer, { cors: { origin: "*" } });
io.on("connection", (socket) => {
    socket.emit("Hello", "World");
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/auth', user_routes_1.default);
const port = Number(process.env.PORT) || 3000;
htppServer.listen(port, () => {
    console.log("App on server port: ", port);
});
