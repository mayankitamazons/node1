/* eslint-disable */
import * as Yup from "yup";
import { hash } from "bcryptjs";

import AppError from "../../errors/AppError";
import UserCustomer from "../../models/UserCustomer";
import { Op } from "sequelize";

interface Request {
  adminId: number;
  name: string;
  email: string;
  crm: string;
  uf: string;
  usuario: string;
  password: string;
}

interface Response {
  id: number;
  adminId: number;
  name: string;
  email: string;
  crm: string;
  uf: string;
  usuario: string;
}

const CreateUserCustomerService = async ({
  adminId,
  name,
  email,
  crm,
  uf,
  usuario,
  password
}: Request): Promise<Response> => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    crm: Yup.string().required(),
    uf: Yup.string().required(),
    usuario: Yup.string().required(),
    password: Yup.string().required()
  });

  try {
    await schema.validate({
      name,
      email,
      crm,
      uf,
      usuario,
      password
    });
  } catch (err: any) {
    throw new AppError(err.message);
  }

  const crmInfo = crm;
  let outputCrm;
  const regEx = /^\d{2}\.\d{3}\.\d{2}$/;

  if (regEx.test(crmInfo)) {
    const match = crmInfo.match(regEx);
    outputCrm = match ? match[0].replace(/\./g, "") : "";
  } else {
    console.log("A informação do body não corresponde ao formato de regex.");
    outputCrm = crmInfo;
  }

  if (outputCrm) {
    const customerExists = await UserCustomer.findOne({
      where: {
        [Op.or]: [{ email: email }, { crm: outputCrm }]
      }
    });

    if (customerExists) {
      throw new AppError("E-mail ou CRM já cadastrado.", 409);
    }
  }

  const hashedPassword = await hash(password, 8);

  const customer = await UserCustomer.create({
    adminId,
    name,
    email,
    crm: outputCrm,
    uf,
    usuario,
    password,
    passwordHash: hashedPassword
  });

  return {
    id: customer.id,
    adminId: customer.adminId,
    name: customer.name,
    email: customer.email,
    crm: customer.crm,
    uf: customer.uf,
    usuario: customer.usuario
  };
};

export default CreateUserCustomerService;
