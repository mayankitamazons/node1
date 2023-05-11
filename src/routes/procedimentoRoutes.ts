/* eslint-disable */
import isAuth from "../middleware/isAuth";
import { Router } from "express";

import * as ProceduresController from '../controllers/ProcedimentoController';

const procedureRoutes = Router();

procedureRoutes.post("/procedimento/add", ProceduresController.store);

procedureRoutes.get("/procedimentos", isAuth, ProceduresController.index);

procedureRoutes.get('/procedimento/:procedureId', isAuth, ProceduresController.show);

export default procedureRoutes;

