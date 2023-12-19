"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const data_source_1 = require("../database/data-source");
const User_1 = require("../entity/User");
const register = async (req, res) => {
    const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        res.json(req.body);
        console.log(req.body);
    }
    catch (error) {
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
};
exports.register = register;
