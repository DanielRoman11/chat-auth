import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Message } from "./Message";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({length: 25})
  name!: string;

  @Column({length: 50})
  description!: string;

  @ManyToOne(() => User, (user) => user.chats)
  user!: User;

  @OneToMany(() => Message, (message) => message.chat)
  messages!: Message[];
}