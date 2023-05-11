/* eslint-disable */
import UserCustomer from "../models/UserCustomer";

export interface SerializedCustumer {
  id: number;
  adminId: number;
  name: string;
  email: string;
  crm: string;
  uf: string;
  usuario: string;
}

export const SerializeUserCustomer = (
  user: UserCustomer
): SerializedCustumer => {
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
