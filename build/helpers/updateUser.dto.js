"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const createUser_dto_1 = require("./createUser.dto");
class UpdateUserDto extends createUser_dto_1.CreateUserDTO {
    constructor(props) {
        super();
        Object.assign(this, props);
    }
}
exports.UpdateUserDto = UpdateUserDto;
