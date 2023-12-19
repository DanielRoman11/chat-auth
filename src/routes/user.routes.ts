import express from "express";
import { register } from "../controllers/user.controller";
import { Response, Request } from "express";

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
  res.send("Holaa")
})
route.post('/register', register);
// route.post('/login', )

export default route;