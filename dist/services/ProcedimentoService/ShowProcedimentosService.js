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
const Procedimento_1 = __importDefault(require("../../models/Procedimento"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const ShowProcedimentosService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const procedure = yield Procedimento_1.default.findByPk(id, {
        include: ["beneficiarioInfo", "laudoInfo", "opmeInfo"]
    });
    if (!procedure) {
        throw new AppError_1.default("ERROR_PROCEDIMENTO_NAO_ENCONTRADO", 404);
    }
    return procedure;
});
exports.default = ShowProcedimentosService;
