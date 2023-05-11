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
exports.show = exports.index = exports.store = void 0;
/* eslint-disable */
const Yup = __importStar(require("yup"));
const socket_1 = require("../libs/socket");
const AppError_1 = __importDefault(require("../errors/AppError"));
const CreateProcedimentoService_1 = __importDefault(require("../services/ProcedimentoService/CreateProcedimentoService"));
const ShowProcedimentosService_1 = __importDefault(require("../services/ProcedimentoService/ShowProcedimentosService"));
const ListProcedimentosService_1 = __importDefault(require("../services/ProcedimentoService/ListProcedimentosService"));
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const schema = Yup.object().shape({
        admin: Yup.string().required(),
        prioridade: Yup.string().required(),
        procedimento: Yup.string().required(),
        processo: Yup.string().required(),
        fase: Yup.string().required(),
        operadora: Yup.string().required(),
        atendimento: Yup.string().required(),
        cid: Yup.string().required(),
        nome_responsavel: Yup.string().required(),
        email_responsavel: Yup.string().required(),
        tel_responsavel: Yup.string().required(),
        nome_prestador: Yup.string().required(),
        code_prestador: Yup.string().required(),
        data_inicio: Yup.string().required(),
        data_previsao: Yup.string().required()
    });
    try {
        yield schema.validate(body);
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    const procedures = yield CreateProcedimentoService_1.default(Object.assign({}, body));
    const io = socket_1.getIO();
    io.emit("procedure", {
        action: "create",
        procedures
    });
    return res.status(201).json({
        message: "Procedimento criado com sucesso!",
        data: procedures
    });
});
exports.store = store;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const procedures = yield ListProcedimentosService_1.default();
    return res.status(200).json(procedures);
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { procedureId } = req.params;
    const procedure = yield ShowProcedimentosService_1.default(procedureId);
    return res.status(200).json(procedure);
});
exports.show = show;
