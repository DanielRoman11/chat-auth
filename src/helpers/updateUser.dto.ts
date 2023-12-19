import { CreateUserDTO } from "./createUser.dto";

export class UpdateUserDto extends CreateUserDTO {
  constructor(props?: Partial<CreateUserDTO>){
    super();
    Object.assign(this, props);
  }
}