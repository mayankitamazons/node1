/* eslint-disable prettier/prettier */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import AppError from "../errors/AppError";
import CreateUserCustomerService from "../services/UserCustomerService/CreateUserCustomer";
import VerifyEmailCustomerService from "../services/UserCustomerService/VerifyEmailCustomer";
import VerifyCRMCustomerService from "../services/UserCustomerService/VerifyCrmCustomer";

type IndexQuery = {
  searchParam: string;
  pageNumber: string;
};

interface updatePresenceParams {
  status: string | number;
  userId: string | number;
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { adminId, name, email, crm, uf, usuario, password } = req.body;

  try {
    const data = await CreateUserCustomerService({
      adminId,
      name,
      email,
      crm,
      uf,
      usuario,
      password
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

export const VerifyEmailUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  try {
    await VerifyEmailCustomerService(email);

    return res.status(200).json({ msg: "E-mail verificado!" });
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

export const VerifyCrmUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { crm } = req.body;

  try {
    await VerifyCRMCustomerService(crm);

    return res.status(200).json({ msg: "CRM verificado!" });
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

// export const VerifyPasswordUser = (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { password } = req.body;

//   try {

//   } catch (error) {

//   }
// };
