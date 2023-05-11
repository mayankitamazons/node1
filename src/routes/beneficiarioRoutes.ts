/* eslint-disable */
import isAuth from "../middleware/isAuth";
import { Router } from "express";

import * as BeneficiarysController from '../controllers/BeneficiarioController';

const beneficiaryRoutes = Router();

beneficiaryRoutes.post("/beneficiario/add", BeneficiarysController.store);

export default beneficiaryRoutes;

