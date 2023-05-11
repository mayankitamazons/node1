"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const express_1 = require("express");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const procedimentoRoutes_1 = __importDefault(require("./procedimentoRoutes"));
const beneficiarioRoutes_1 = __importDefault(require("./beneficiarioRoutes"));
const procedimentoLaudoRoute_1 = __importDefault(require("./procedimentoLaudoRoute"));
const procedimentoOpmeRoute_1 = __importDefault(require("./procedimentoOpmeRoute"));
const routes = express_1.Router();
routes.use("/auth", authRoutes_1.default);
routes.use(procedimentoRoutes_1.default);
routes.use(beneficiarioRoutes_1.default);
routes.use(procedimentoLaudoRoute_1.default);
routes.use(procedimentoOpmeRoute_1.default);
exports.default = routes;
