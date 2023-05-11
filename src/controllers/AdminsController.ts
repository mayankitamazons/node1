/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import AppError from "../errors/AppError";
import CreateAdminService from "../services/AdminsService/CreateAdminsService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { admin, name, email, password, usuario, service, whatsapp, uf, cep } =
    req.body;

  try {
    const data = await CreateAdminService({
      admin,
      name,
      email,
      password,
      usuario,
      service,
      whatsapp,
      uf,
      cep
    });

    return res.status(201).json({ msg: "Usuário criado com succeso", data });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message });
    } else {
      const exception = new Error((error as Error).message);
      console.error(error);
      return res.status(500).json({ error: exception.message });
    }
  }
};
