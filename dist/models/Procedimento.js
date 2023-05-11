"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const sequelize_typescript_1 = require("sequelize-typescript");
const Beneficiario_1 = __importDefault(require("./Beneficiario"));
const ProcedimentoOpme_1 = __importDefault(require("./ProcedimentoOpme"));
const ProcedimentoLaudo_1 = __importDefault(require("./ProcedimentoLaudo"));
let Procedimento = class Procedimento extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Procedimento.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "admin", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], Procedimento.prototype, "prioridade", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "procedimento", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "processo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "fase", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "operadora", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "atendimento", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "cid", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "nome_responsavel", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "email_responsavel", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "tel_responsavel", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Beneficiario_1.default),
    __metadata("design:type", Array)
], Procedimento.prototype, "beneficiarioInfo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "nome_prestador", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "code_prestador", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ProcedimentoOpme_1.default),
    __metadata("design:type", Array)
], Procedimento.prototype, "opmeInfo", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => ProcedimentoLaudo_1.default),
    __metadata("design:type", Array)
], Procedimento.prototype, "laudoInfo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "data_inicio", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Procedimento.prototype, "data_previsao", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Procedimento.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Procedimento.prototype, "updatedAt", void 0);
Procedimento = __decorate([
    sequelize_typescript_1.Table({
        tableName: "Procedimentos",
        timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
    })
], Procedimento);
exports.default = Procedimento;
