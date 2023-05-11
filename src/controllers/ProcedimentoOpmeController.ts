/* eslint-disable */
import * as Yup from "yup";
import { Request, Response } from "express";
import { getIO } from "../libs/socket";
import AppError from "../errors/AppError";
import CreateProcedimentoOpmeService from "../services/ProcedimentoOpmeService/StoreService";

interface ProcedimentoOpmeData {
  codigo: string;
  qtde_solicitada: number;
  divergencia: string;
  descricao: string;
  qtd_sugerida: number;
  procedimentoId: number;
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  const body: Array<ProcedimentoOpmeData> = req.body;

  const schema = Yup.object().shape({
    codigo: Yup.string().required(),
    qtde_solicitada: Yup.number().required(),
    divergencia: Yup.string().required(),
    descricao: Yup.string().required(),
    qtd_sugerida: Yup.string().required(),
    procedimentoId: Yup.number().required()
  });

  const arraySchema = Yup.array().of(schema);

  try {
    await arraySchema.validate(body);
  } catch (error: any) {
    throw new AppError(error.message);
  }

  const procedureOpmePromises = body.map(async (info) => {
    return await CreateProcedimentoOpmeService({...info});
  })

  const procedureOpme = await Promise.all(procedureOpmePromises);

  const io = getIO();
  io.emit("procedureOpme", {
    action: "create",
    procedureOpme
  });

  return res
    .status(201)
    .json({
      data: procedureOpme,
      message: "OPME criado com sucesso"
    });
}