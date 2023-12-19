"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = (0, express_1.default)();
var htppServer = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(htppServer, { cors: { origin: "*" } });
io.on("connection", function (socket) {
    socket.emit("Hello", "World");
});
app.use('/auth', user_routes_1.default);
var port = Number(process.env.PORT) || 3000;
htppServer.listen(port, function () {
    console.log("App on server port: ", port);
});
