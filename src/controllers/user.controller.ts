import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entity/User";
import { CreateUserDTO } from "../helpers/createUser.dto";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

export const register = async(req: Request, res: Response) =>{
  const userRepo = AppDataSource.getRepository(User);
  try {
    res.json(req.body)
    console.log(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
  
  
  // const { username, email, password } = req.body;
  
  // try {
  //   const salt = await bcrypt.genSalt(10)
  //   const hashPassword = await bcrypt.hash(password, salt);
        
  //   const user: CreateUserDTO = {
  //     id: nanoid(10),
  //     username,
  //     email,
  //     password: hashPassword
  //   }

  //   await userRepo.save(user);
  //   return user;
    
  // } catch(err: any | unknown) {
  //   console.error(err);
  //   throw new Error(err);
  // }
}
