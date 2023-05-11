/* eslint-disable prettier/prettier */
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";
import UserCustomer from "../models/UserCustomer";
import Admins from "../models/Admins";

export const createNewAccessToken = (user: UserCustomer): string => {
  const { secret, expiresIn } = authConfig;

  return sign(
    { usarname: user.name, profile: "userCustomer", id: user.id },
    secret,
    {
      expiresIn
    }
  );
};

export const createNewRefreshToken = (user: UserCustomer): string => {
  const { refreshSecret, refreshExpiresIn } = authConfig;

  return sign({ id: user.id, tokenVersion: 0 }, refreshSecret, {
    expiresIn: refreshExpiresIn
  });
};

export const createAdminAccessToken = (admin: Admins): string => {
  const { secret, expiresIn } = authConfig;

  return sign(
    { usarname: admin.name, profile: admin.admin, id: admin.id },
    secret,
    {
      expiresIn
    }
  );
};

export const createAdminRefreshToken = (admin: Admins): string => {
  const { refreshSecret, refreshExpiresIn } = authConfig;

  return sign({ id: admin.id, tokenVersion: 0 }, refreshSecret, {
    expiresIn: refreshExpiresIn
  });
};
