"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Chat_1 = require("../entity/Chat");
const Message_1 = require("../entity/Message");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: process.env.MONGODB_URI,
    // host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [User_1.User, Chat_1.Chat, Message_1.Message],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource.initialize().then(() => {
    console.log("DB CONN");
}).catch(err => {
    console.log(err);
});
