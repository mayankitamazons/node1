/* eslint-disable */
import * as Yup from "yup";
import { hash } from "bcryptjs";

import AppError from "../../errors/AppError";
import Admins from "../../models/Admins";
import { Op } from "sequelize";

interface Request {
  admin: string;
  name: string;
  email: string;
  service: string;
  usuario: string;
  password: string;
  whatsapp: string;
  uf: string;
  cep: string;
}

interface Response {
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

const CreateAdminService = async ({
  admin,
  name,
  email,
  password,
  usuario,
  service,
  whatsapp,
  uf,
  cep
}: Request): Promise<Response> => {
  const schema = Yup.object().shape({
    admin: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    cep: Yup.string().required(),
    uf: Yup.string().required(),
    usuario: Yup.string().required(),
    password: Yup.string().required(),
    whatsapp: Yup.string().required(),
    service: Yup.string().required()
  });

  try {
    await schema.validate({
      admin,
      name,
      email,
      cep,
      uf,
      usuario,
      password,
      whatsapp,
      service
    });
  } catch (err: any) {
    throw new AppError(err.message);
  }

  const adminExists = await Admins.findOne({
    where: {
      [Op.or]: [{ email: email }, { usuario: usuario }]
    }
  });

  if (adminExists) {
     throw new AppError("E-mail ou Usuário já cadastrado.", 409);
  }

  const hashedPassword = await hash(password, 8);

  const Admin = await Admins.create({
    admin,
    name,
    email,
    cep,
    uf,
    usuario,
    password,
    passwordHash: hashedPassword,
    whatsapp,
    service,
  });

  return {
    id: Admin.id,
    admin: Admin.admin,
    name: Admin.name,
    email: Admin.email,
    service: Admin.service,
    whatsapp: Admin.whatsapp,
    usuario: Admin.usuario,
    uf: Admin.uf,
    cep: Admin.cep
  }
};

export default CreateAdminService;
