"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
var createUser_dto_1 = require("./createUser.dto");
var UpdateUserDto = /** @class */ (function (_super) {
    __extends(UpdateUserDto, _super);
    function UpdateUserDto(props) {
        var _this = _super.call(this) || this;
        Object.assign(_this, props);
        return _this;
    }
    return UpdateUserDto;
}(createUser_dto_1.CreateUserDTO));
exports.UpdateUserDto = UpdateUserDto;