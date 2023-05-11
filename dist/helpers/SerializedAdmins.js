"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializedAdminModel = void 0;
const SerializedAdminModel = (admin) => {
    return {
        id: admin.id,
        admin: admin.admin,
        name: admin.name,
        email: admin.email,
        service: admin.service,
        usuario: admin.usuario,
        whatsapp: admin.whatsapp,
        uf: admin.uf,
        cep: admin.cep
    };
};
exports.SerializedAdminModel = SerializedAdminModel;
