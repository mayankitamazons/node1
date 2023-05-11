/* eslint-disable prettier/prettier */
/* eslint-disable */
import { Sequelize } from "sequelize-typescript";

import ResetPassWord from "../models/ResetPassword";
import UserCustomer from "../models/UserCustomer";
import Admins from "../models/Admins";
import Procedimento from "../models/Procedimento";
import Beneficiario from "../models/Beneficiario";
import ProcedimentoOpme from "../models/ProcedimentoOpme";
import ProcedimentoLaudo from "../models/ProcedimentoLaudo";

const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

const models = [
  ResetPassWord,
  UserCustomer,
  Admins,
  Procedimento,
  Beneficiario,
  ProcedimentoOpme,
  ProcedimentoLaudo
];

sequelize.addModels(models);

export default sequelize;
