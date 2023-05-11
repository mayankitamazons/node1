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
exports.VerifyCrmUser = exports.VerifyEmailUser = exports.store = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const CreateUserCustomer_1 = __importDefault(require("../services/UserCustomerService/CreateUserCustomer"));
const VerifyEmailCustomer_1 = __importDefault(require("../services/UserCustomerService/VerifyEmailCustomer"));
const VerifyCrmCustomer_1 = __importDefault(require("../services/UserCustomerService/VerifyCrmCustomer"));
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { adminId, name, email, crm, uf, usuario, password } = req.body;
    try {
        const data = yield CreateUserCustomer_1.default({
            adminId,
            name,
            email,
            crm,
            uf,
            usuario,
            password
        });
        return res.status(201).json({ msg: "Usuário criado com succeso", data });
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
const VerifyEmailUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        yield VerifyEmailCustomer_1.default(email);
        return res.status(200).json({ msg: "E-mail verificado!" });
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
exports.VerifyEmailUser = VerifyEmailUser;
const VerifyCrmUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { crm } = req.body;
    try {
        yield VerifyCrmCustomer_1.default(crm);
        return res.status(200).json({ msg: "CRM verificado!" });
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
exports.VerifyCrmUser = VerifyCrmUser;
// export const VerifyPasswordUser = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { password } = req.body;
//   try {
//   } catch (error) {
//   }
// };
