import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Chat } from "../entity/Chat";
import { Message } from "../entity/Message";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGODB_URI,
  // host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [User, Chat, Message],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize().then(()=>{
  console.log("DB CONN");
}).catch(err =>{
  console.log(err);
})