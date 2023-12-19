"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user.controller");
var route = express_1.default.Router();
route.get('/', function (req, res) {
    res.send("Holaa");
});
route.post('/register', user_controller_1.register);
// route.post('/login', )
exports.default = route;
