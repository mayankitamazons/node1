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
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        const passwordHash = yield bcryptjs_1.hash("123456", 8);
        return queryInterface.bulkInsert("Users", [
            {
                name: "Admin",
                adminId: 2,
                email: "admin@admin.com",
                profile: "adminSuper",
                passwordHash,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    }),
    down: (queryInterface) => {
        return queryInterface.bulkDelete("Users", {});
    }
};
