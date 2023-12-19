import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Chat } from "./Chat";
import { Message } from "./Message";

@Entity()
export class User {
  @PrimaryColumn()
  id!: string;

  @Column({length: 20})
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  avatarUrl!: string;
  
  @OneToMany(()=> Chat, (chat) => chat.user)
  chats!: Chat[];
  
  @OneToMany(()=> Chat, (message) => message.user)
  messages!: Message[];
}
