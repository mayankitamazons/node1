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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Admins_1 = __importDefault(require("../../models/Admins"));
const CreateTokens_1 = require("../../helpers/CreateTokens");
const sequelize_1 = require("sequelize");
const SerializedAdmins_1 = require("../../helpers/SerializedAdmins");
const AuthAdminsService = ({ user, password }) => __awaiter(void 0, void 0, void 0, function* () {
    let adminInfo;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regExEmail.test(user)) {
        adminInfo = user;
    }
    else {
        adminInfo = user;
    }
    const admin = yield Admins_1.default.findOne({
        where: {
            [sequelize_1.Op.or]: [{ email: adminInfo }, { usuario: adminInfo }]
        }
    });
    console.log("search !!!!!!!", adminInfo);
    console.log("admin !!!!!!!", admin === null || admin === void 0 ? void 0 : admin.id);
    if (!admin) {
        throw new AppError_1.default("USUARIO_NAO_ENCONTRADO", 401);
    }
    if (!(yield admin.checkPassword(password))) {
        throw new AppError_1.default("SENHA_INVALIDA", 401);
    }
    const token = CreateTokens_1.createAdminAccessToken(admin);
    const refreshToken = CreateTokens_1.createAdminRefreshToken(admin);
    const serializedAdmin = SerializedAdmins_1.SerializedAdminModel(admin);
    return {
        serializedAdmin,
        token,
        refreshToken
    };
});
exports.default = AuthAdminsService;
