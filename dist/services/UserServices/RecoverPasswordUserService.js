"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.DeleteToken = exports.UpdateUserPasswordByEmailService = exports.VerifyTokenService = exports.CreateTokenService = exports.SendEmailPasswordRecovery = void 0;
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
const Yup = __importStar(require("yup"));
const UserCustomer_1 = __importDefault(require("../../models/UserCustomer"));
const nodemailer_1 = require("../../libs/nodemailer");
const ResetPassword_1 = __importDefault(require("../../models/ResetPassword"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const SendEmailPasswordRecovery = (email, tokenReset) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required()
            .test("Check-email", "Email não registrado.", (value) => __awaiter(void 0, void 0, void 0, function* () {
            if (!value)
                return false;
            const emailExists = yield UserCustomer_1.default.findOne({
                where: { email: value }
            });
            return !!emailExists;
        }))
    });
    try {
        yield schema.validate({ email });
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    let contentNodeMailer = {
        sentNameTo: "Pedro",
        sentReceiverTo: email,
        content: {
            nameConnection: "",
            nameCompany: ""
        },
        emailContent: "passwordRecovery",
        email: ""
    };
    if (Boolean(tokenReset))
        Object.defineProperty(contentNodeMailer, "tokenRecovery", {
            value: tokenReset
        });
    nodemailer_1.NodeMailer(contentNodeMailer);
    return email;
});
exports.SendEmailPasswordRecovery = SendEmailPasswordRecovery;
const CreateTokenService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required()
            .test("Check-email", "Email não registrado.", (value) => __awaiter(void 0, void 0, void 0, function* () {
            if (!value)
                return false;
            const emailExists = yield UserCustomer_1.default.findOne({
                where: { email: value }
            });
            return !!emailExists;
        }))
    });
    try {
        yield schema.validate({ email });
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    const verifyEmail = yield UserCustomer_1.default.findAll({ where: { email }, raw: true });
    if ((verifyEmail.length = 0))
        throw new AppError_1.default("E-mail ainda não cadastrado", 403);
    yield ResetPassword_1.default.destroy({ where: { email } });
    return ResetPassword_1.default.create({ email });
});
exports.CreateTokenService = CreateTokenService;
const VerifyTokenService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenRecord = yield ResetPassword_1.default.findOne({
        where: { tokenHash: token }
    });
    if (!tokenRecord)
        throw new AppError_1.default("Token inválido .", 403);
    return tokenRecord;
});
exports.VerifyTokenService = VerifyTokenService;
const UpdateUserPasswordByEmailService = (emailRequest, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserCustomer_1.default.findOne({ where: { email: emailRequest } });
    if (!user)
        throw new AppError_1.default("User not found .", 404);
    yield user.update({ password: newPassword });
    return user;
});
exports.UpdateUserPasswordByEmailService = UpdateUserPasswordByEmailService;
const DeleteToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return ResetPassword_1.default.destroy({ where: { tokenHash: token } });
});
exports.DeleteToken = DeleteToken;
