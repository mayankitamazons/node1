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
const Procedimento_1 = __importDefault(require("../../models/Procedimento"));
const CreateProcedimentoService = ({ admin, prioridade, procedimento, processo, fase, operadora, atendimento, cid, nome_responsavel, email_responsavel, tel_responsavel, nome_prestador, code_prestador, data_inicio, data_previsao }) => __awaiter(void 0, void 0, void 0, function* () {
    if (processo) {
        const procedureExists = yield Procedimento_1.default.findOne({
            where: {
                processo
            }
        });
        if (procedureExists) {
            throw new AppError_1.default("ERRO_PROCEDIMENTO_DUPLICADO");
        }
    }
    const procedure = yield Procedimento_1.default.create({
        admin,
        prioridade,
        procedimento,
        processo,
        fase,
        operadora,
        atendimento,
        cid,
        nome_responsavel,
        email_responsavel,
        tel_responsavel,
        nome_prestador,
        code_prestador,
        data_inicio,
        data_previsao
    }, {
        include: ["beneficiarioInfo", "opmeInfo", "laudoInfo"]
    });
    return procedure;
});
exports.default = CreateProcedimentoService;
