"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAdmin = exports.store = void 0;
const AuthCustomerService_1 = __importDefault(require("../services/UserCustomerService/AuthCustomerService"));
const AuthAdminsService_1 = __importDefault(require("../services/AdminsService/AuthAdminsService"));
const SendRefreshToken_1 = require("../helpers/SendRefreshToken");
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    const { token, serializedCustomer, refreshToken } = yield AuthCustomerService_1.default({
        userID: user,
        password
    });
    SendRefreshToken_1.SendRefreshToken(res, refreshToken);
    return res.status(200).json({
        token,
        user: serializedCustomer
    });
});
exports.store = store;
const storeAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    const { serializedAdmin, token, refreshToken } = yield AuthAdminsService_1.default({
        user, password
    });
    SendRefreshToken_1.SendRefreshToken(res, refreshToken);
    return res.status(200).json({
        token,
        user: serializedAdmin
    });
});
exports.storeAdmin = storeAdmin;
