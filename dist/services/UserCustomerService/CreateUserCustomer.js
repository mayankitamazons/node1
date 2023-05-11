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
/* eslint-disable */
const Yup = __importStar(require("yup"));
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const UserCustomer_1 = __importDefault(require("../../models/UserCustomer"));
const sequelize_1 = require("sequelize");
const CreateUserCustomerService = ({ adminId, name, email, crm, uf, usuario, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        crm: Yup.string().required(),
        uf: Yup.string().required(),
        usuario: Yup.string().required(),
        password: Yup.string().required()
    });
    try {
        yield schema.validate({
            name,
            email,
            crm,
            uf,
            usuario,
            password
        });
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    const crmInfo = crm;
    let outputCrm;
    const regEx = /^\d{2}\.\d{3}\.\d{2}$/;
    if (regEx.test(crmInfo)) {
        const match = crmInfo.match(regEx);
        outputCrm = match ? match[0].replace(/\./g, "") : "";
    }
    else {
        console.log("A informação do body não corresponde ao formato de regex.");
        outputCrm = crmInfo;
    }
    if (outputCrm) {
        const customerExists = yield UserCustomer_1.default.findOne({
            where: {
                [sequelize_1.Op.or]: [{ email: email }, { crm: outputCrm }]
            }
        });
        if (customerExists) {
            throw new AppError_1.default("E-mail ou CRM já cadastrado.", 409);
        }
    }
    const hashedPassword = yield bcryptjs_1.hash(password, 8);
    const customer = yield UserCustomer_1.default.create({
        adminId,
        name,
        email,
        crm: outputCrm,
        uf,
        usuario,
        password,
        passwordHash: hashedPassword
    });
    return {
        id: customer.id,
        adminId: customer.adminId,
        name: customer.name,
        email: customer.email,
        crm: customer.crm,
        uf: customer.uf,
        usuario: customer.usuario
    };
});
exports.default = CreateUserCustomerService;
