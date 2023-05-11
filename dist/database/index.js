"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* eslint-disable */
const sequelize_typescript_1 = require("sequelize-typescript");
const ResetPassword_1 = __importDefault(require("../models/ResetPassword"));
const UserCustomer_1 = __importDefault(require("../models/UserCustomer"));
const Admins_1 = __importDefault(require("../models/Admins"));
const Procedimento_1 = __importDefault(require("../models/Procedimento"));
const Beneficiario_1 = __importDefault(require("../models/Beneficiario"));
const ProcedimentoOpme_1 = __importDefault(require("../models/ProcedimentoOpme"));
const ProcedimentoLaudo_1 = __importDefault(require("../models/ProcedimentoLaudo"));
const dbConfig = require("../config/database");
const sequelize = new sequelize_typescript_1.Sequelize(dbConfig);
const models = [
    ResetPassword_1.default,
    UserCustomer_1.default,
    Admins_1.default,
    Procedimento_1.default,
    Beneficiario_1.default,
    ProcedimentoOpme_1.default,
    ProcedimentoLaudo_1.default
];
sequelize.addModels(models);
exports.default = sequelize;
