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
exports.VerifyToken = exports.update = exports.store = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const RecoverPasswordUserService_1 = require("../services/UserServices/RecoverPasswordUserService");
const CatchError = (error, res) => {
    if (error instanceof AppError_1.default) {
        return res.status(error.statusCode).json({ error: error.message });
    }
    else {
        const exception = new Error(error.message);
        console.error(error);
        return res.status(500).json({ error: exception.message });
    }
};
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const token = yield RecoverPasswordUserService_1.CreateTokenService(email);
        yield RecoverPasswordUserService_1.SendEmailPasswordRecovery(email, token.tokenHash);
        return res.status(201).json({
            msg: "E-mail enviado com sucesso!",
            email: token.email,
            tokenHash: token.tokenHash
        });
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        else {
            const exception = new Error(error.message);
            console.error(error);
            return res.status(500).json({ error: exception.message });
        }
    }
});
exports.store = store;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { token, newPassword } = req.body;
    try {
        const tokenRecord = yield RecoverPasswordUserService_1.VerifyTokenService(String(token));
        RecoverPasswordUserService_1.UpdateUserPasswordByEmailService(tokenRecord.email, newPassword).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield RecoverPasswordUserService_1.DeleteToken(tokenRecord.tokenHash);
        }));
        return res.status(200).json({ msg: "Senha atualizada com sucesso!" });
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        else {
            const exception = new Error(error.message);
            console.error(error);
            return res.status(500).json({ error: exception.message });
        }
    }
});
exports.update = update;
const VerifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    try {
        yield RecoverPasswordUserService_1.VerifyTokenService(String(token));
        return res
            .status(200)
            .json({ msg: "Token verificado com sucesso!", token });
    }
    catch (error) {
        if (error instanceof AppError_1.default) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        else {
            const exception = new Error(error.message);
            console.error(exception);
            return res
                .status(500)
                .json({ error: "Não foi possivel autenticar seu token " });
        }
    }
});
exports.VerifyToken = VerifyToken;
