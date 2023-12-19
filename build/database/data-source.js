"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../entity/User");
var Chat_1 = require("../entity/Chat");
var Message_1 = require("../entity/Message");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [User_1.User, Chat_1.Chat, Message_1.Message],
    subscribers: [],
    migrations: [],
});
