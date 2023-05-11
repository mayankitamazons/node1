/* eslint-disable */
import { Router } from "express";

import authRoutes from "./authRoutes";
import procedureRoutes from "./procedimentoRoutes";
import beneficiaryRoutes from "./beneficiarioRoutes";
import reportRoutes from "./procedimentoLaudoRoute";
import opmeRoutes from "./procedimentoOpmeRoute";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use(procedureRoutes);
routes.use(beneficiaryRoutes);
routes.use(reportRoutes);
routes.use(opmeRoutes);

export default routes;
