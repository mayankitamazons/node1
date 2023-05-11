/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import AppError from "../errors/AppError";
import AuthUserCustomerService from "../services/UserCustomerService/AuthCustomerService";
import AuthAdminsService from "../services/AdminsService/AuthAdminsService";
import { SendRefreshToken } from "../helpers/SendRefreshToken";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { user, password } = req.body;

  const { token, serializedCustomer, refreshToken } = await AuthUserCustomerService({
    userID: user,
    password
  });

  SendRefreshToken(res, refreshToken);

  return res.status(200).json({
    token,
    user: serializedCustomer
  });
};

export const storeAdmin = async (req: Request, res: Response): Promise<Response> => {
  const { user, password } = req.body;

  const { serializedAdmin, token, refreshToken } = await AuthAdminsService({
    user, password
  })

  SendRefreshToken(res, refreshToken);

  return res.status(200).json({
    token,
    user: serializedAdmin
  });
}