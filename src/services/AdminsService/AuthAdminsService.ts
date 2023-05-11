/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import AppError from "../../errors/AppError";
import Admins from "../../models/Admins";
import {
  createAdminAccessToken,
  createAdminRefreshToken
} from "../../helpers/CreateTokens";
import { Op } from "sequelize";
import {
  SerializedAdmin,
  SerializedAdminModel
} from "../../helpers/SerializedAdmins";

interface Request {
  user: string;
  password: string;
}

interface Response {
  serializedAdmin: SerializedAdmin;
  token: string;
  refreshToken: string;
}

const AuthAdminsService = async ({
  user,
  password
}: Request): Promise<Response> => {
  let adminInfo: string;

  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regExEmail.test(user)) {
    adminInfo = user;
  } else {
    adminInfo = user;
  }

  const admin = await Admins.findOne({
    where: {
      [Op.or]: [{ email: adminInfo }, { usuario: adminInfo }]
    }
  });

  console.log("search !!!!!!!", adminInfo);
  console.log("admin !!!!!!!", admin?.id);

  if (!admin) {
    throw new AppError("USUARIO_NAO_ENCONTRADO", 401);
  }

  if (!(await admin.checkPassword(password))) {
    throw new AppError("SENHA_INVALIDA", 401);
  }

  const token = createAdminAccessToken(admin);
  const refreshToken = createAdminRefreshToken(admin);

  const serializedAdmin = SerializedAdminModel(admin);

  return {
    serializedAdmin,
    token,
    refreshToken
  };
};

export default AuthAdminsService;
