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
/* eslint-disable */
const AppError_1 = __importDefault(require("../../errors/AppError"));
const CreateTokens_1 = require("../../helpers/CreateTokens");
const sequelize_1 = require("sequelize");
const UserCustomer_1 = __importDefault(require("../../models/UserCustomer"));
const SerializedUserCustomer_1 = require("../../helpers/SerializedUserCustomer");
const AuthUserCustomerService = ({ userID, password }) => __awaiter(void 0, void 0, void 0, function* () {
    let userInfo;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExCrm = /^\d{2}\.\d{3}\.\d{2}$/;
    if (regExEmail.test(userID)) {
        console.log('Formato de email');
        userInfo = userID;
    }
    if (regExCrm.test(userID)) {
        console.log("Formato de CRM");
        const match = userID.match(regExCrm);
        const outputCrm = match ? match[0].replace(/\./g, "") : "";
        userInfo = outputCrm;
    }
    else {
        console.log("A informação do body não corresponde ao formato de regex.");
        userInfo = userID;
    }
    const user = yield UserCustomer_1.default.findOne({
        where: {
            [sequelize_1.Op.or]: [{ email: userInfo }, { crm: userInfo }]
        }
    });
    console.log("search !!!!!!!", userInfo);
    console.log("user !!!!!!!", user === null || user === void 0 ? void 0 : user.id);
    if (!user) {
        console.log("Usuário nao encontrado!");
        throw new AppError_1.default("ERR_INVALID_CREDENTIALS", 401);
    }
    if (!(yield user.checkPassword(password))) {
        throw new AppError_1.default("ERR_INVALID_CREDENTIALS", 401);
    }
    const token = CreateTokens_1.createNewAccessToken(user);
    const refreshToken = CreateTokens_1.createNewRefreshToken(user);
    const serializedCustomer = SerializedUserCustomer_1.SerializeUserCustomer(user);
    return {
        serializedCustomer,
        token,
        refreshToken
    };
});
exports.default = AuthUserCustomerService;
