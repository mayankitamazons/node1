import Admins from "../models/Admins";

export interface SerializedAdmin {
  id: number;
  admin: string;
  name: string;
  email: string;
  service: string;
  usuario: string;
  whatsapp: string;
  uf: string;
  cep: string;
}

export const SerializedAdminModel = (admin: Admins): SerializedAdmin => {
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
