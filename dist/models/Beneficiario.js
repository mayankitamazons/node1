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
const Procedimento_1 = __importDefault(require("./Procedimento"));
let Beneficiario = class Beneficiario extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Beneficiario.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "nome", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "carterinha", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "plano", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "anterior_lei_9656_58", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "sexo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "data_nascimento", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "localidade", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Beneficiario.prototype, "uf", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Procedimento_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Beneficiario.prototype, "procedimentoId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Procedimento_1.default),
    __metadata("design:type", Procedimento_1.default)
], Beneficiario.prototype, "procedimento", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Beneficiario.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Beneficiario.prototype, "updatedAt", void 0);
Beneficiario = __decorate([
    sequelize_typescript_1.Table({
        tableName: "Beneficiarios",
        timestamps: true // ativa o uso dos campos "createdAt" e "updatedAt"
    })
], Beneficiario);
exports.default = Beneficiario;
