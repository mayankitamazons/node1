/* eslint-disable */
import isAuth from "../middleware/isAuth";
import { Router } from "express";

import * as ProcedimentoLaudoController from "../controllers/ProcedimentoLaudoController";

const reportRoutes = Router();

reportRoutes.post("/laudo/add", ProcedimentoLaudoController.store);

export default reportRoutes;