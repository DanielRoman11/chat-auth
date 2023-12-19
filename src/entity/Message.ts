import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Chat } from "./Chat";

@Entity()
export class Message{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  text!: string;

  @Column("timestamp")
  timestamp!: Date;

  @ManyToOne(() => User, (user) => user.messages)
  user!: User;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat!: Chat 

}