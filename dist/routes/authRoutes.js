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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const SessionController = __importStar(require("../controllers/SessionController"));
const UserCustomerController = __importStar(require("../controllers/UserCustomerController"));
const RecoverPassword = __importStar(require("../controllers/RecoverPasswordController"));
const AdminsController = __importStar(require("../controllers/AdminsController"));
const authRoutes = express_1.Router();
authRoutes.post("/signup", UserCustomerController.store);
authRoutes.post("/verifyEmail", UserCustomerController.VerifyEmailUser);
authRoutes.post("verifyCrm", UserCustomerController.VerifyCrmUser);
authRoutes.post("/login", SessionController.store);
authRoutes.post("/recover_password", RecoverPassword.store);
authRoutes.post("/verify_password_token", RecoverPassword.VerifyToken);
authRoutes.post("/password_reset", RecoverPassword.update);
authRoutes.post("/signup_admin", AdminsController.store);
authRoutes.post("/login_admins", SessionController.storeAdmin);
exports.default = authRoutes;
