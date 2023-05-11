"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeUserCustomer = void 0;
const SerializeUserCustomer = (user) => {
    return {
        id: user.id,
        adminId: user.adminId,
        name: user.name,
        email: user.email,
        crm: user.crm,
        uf: user.uf,
        usuario: user.usuario,
    };
};
exports.SerializeUserCustomer = SerializeUserCustomer;
