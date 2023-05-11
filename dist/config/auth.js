"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
exports.default = {
    secret: process.env.JWT_SECRET || "mysecret",
    expiresIn: "1d",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
    refreshExpiresIn: "7d"
};
