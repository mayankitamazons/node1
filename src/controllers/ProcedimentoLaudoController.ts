/* eslint-disable */
import * as Yup from "yup";
import { Request, Response } from "express";
import { getIO } from "../libs/socket";
import AppError from "../errors/AppError";
import CreateProcedimentoLaudoService from "../services/ProcedimentoLaudoService/StoreService";

interface ProcedimentoLaudoData {
  codigo: string;
  divergencia: string;
  titulo_descricao: string;
  descricao: string;
  procedimentoId: number;
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  const body: Array<ProcedimentoLaudoData> = req.body;

  const schema = Yup.object().shape({
    codigo: Yup.string().required(),
    divergencia: Yup.string().required(),
    titulo_descricao: Yup.string().required(),
    procedimentoId: Yup.number().required()
  });

  const arraySchema = Yup.array().of(schema);

  try {
    await arraySchema.validate(body);
  } catch (error: any) {
    throw new AppError(error.message);
  }

  const procedureReportPromises = body.map( async (info) => {
     return await CreateProcedimentoLaudoService({ ...info });
  })

  const procedureReport = await Promise.all(procedureReportPromises);

  const io = getIO();
  io.emit("procedureReport", {
    action: "create",
    procedureReport
  });

  return res
    .status(201)
    .json({
      message: "Laudo de procedimento criado com sucesso",
      data: procedureReport
    });
};
