/* eslint-disable */
import { verify } from "jsonwebtoken";
import { Response as Res } from "express";

import AppError from "../../errors/AppError";
import authConfig from "../../config/auth";

interface RefreshTokenPayload {
  id: string;
  tokenVersion: number;
}

interface Response {
  newToken: string;
  refreshToken: string;
}

// export const RefreshTokenService = async (
//   res: Res,
//   token: string
// ): Promise<Response> => {
//   try {
//     const decoded = verify(token, authConfig.refreshSecret);
//     const { id, tokenVersion } = decoded as RefreshTokenPayload;

//     return
//   } catch (err) {
//     // res.clearCookie("jrt");
//     throw new AppError("ERROR_SESSÃO_EXPIRADA", 401);
//   }
// };
