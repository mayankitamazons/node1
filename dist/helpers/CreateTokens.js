"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminRefreshToken = exports.createAdminAccessToken = exports.createNewRefreshToken = exports.createNewAccessToken = void 0;
/* eslint-disable prettier/prettier */
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const createNewAccessToken = (user) => {
    const { secret, expiresIn } = auth_1.default;
    return jsonwebtoken_1.sign({ usarname: user.name, profile: "userCustomer", id: user.id }, secret, {
        expiresIn
    });
};
exports.createNewAccessToken = createNewAccessToken;
const createNewRefreshToken = (user) => {
    const { refreshSecret, refreshExpiresIn } = auth_1.default;
    return jsonwebtoken_1.sign({ id: user.id, tokenVersion: 0 }, refreshSecret, {
        expiresIn: refreshExpiresIn
    });
};
exports.createNewRefreshToken = createNewRefreshToken;
const createAdminAccessToken = (admin) => {
    const { secret, expiresIn } = auth_1.default;
    return jsonwebtoken_1.sign({ usarname: admin.name, profile: admin.admin, id: admin.id }, secret, {
        expiresIn
    });
};
exports.createAdminAccessToken = createAdminAccessToken;
const createAdminRefreshToken = (admin) => {
    const { refreshSecret, refreshExpiresIn } = auth_1.default;
    return jsonwebtoken_1.sign({ id: admin.id, tokenVersion: 0 }, refreshSecret, {
        expiresIn: refreshExpiresIn
    });
};
exports.createAdminRefreshToken = createAdminRefreshToken;
