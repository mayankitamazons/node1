/* eslint-disable */
import isAuth from "../middleware/isAuth";
import { Router } from "express";

import * as ProcedimentoOpmeController from "../controllers/ProcedimentoOpmeController";

const opmeRoutes = Router();

opmeRoutes.post("/opme/add", ProcedimentoOpmeController.store);

export default opmeRoutes;