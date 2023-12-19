import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entity/User";
import { CreateUserDTO } from "../helpers/createUser.dto";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

export const register = async(req: Request, res: Response) =>{
  const userRepo = AppDataSource.getRepository(User);
  
  const { username, email, password } = req.body;

  await bcrypt.genSalt(10)
    .then(async(salt) => {
      const hashPassword = await bcrypt.hash(password, salt);
      
      const user: CreateUserDTO = {
        id: nanoid(10),
        username,
        email,
        password: hashPassword
      }

      await userRepo.save(user);
      return user;
    }).catch((err) => {
      console.error(err);
      throw new Error(err)
    });
}