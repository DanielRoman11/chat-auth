import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Chat } from "../entity/Chat";
import { Message } from "../entity/Message";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, Chat, Message],
  subscribers: [],
  migrations: [],
});
