/* eslint-disable */
import * as Yup from "yup";
import { Request, Response } from "express";
import { getIO } from "../libs/socket";
import AppError from "../errors/AppError";
import CreateProcedimentoService from "../services/ProcedimentoService/CreateProcedimentoService";
import ShowProcedimentosService from "../services/ProcedimentoService/ShowProcedimentosService";
import ListProcedimentosService from "../services/ProcedimentoService/ListProcedimentosService";

interface ProcedureData {
  admin: string;
  prioridade: boolean;
  procedimento: string;
  processo: string;
  fase: string;
  operadora: string;
  atendimento: string;
  cid: string;
  nome_responsavel: string;
  email_responsavel: string;
  tel_responsavel: string;
  nome_prestador: string;
  code_prestador: string;
  data_inicio: string;
  data_previsao: string;
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  const body: ProcedureData = req.body;

  const schema = Yup.object().shape({
    admin: Yup.string().required(),
    prioridade: Yup.string().required(),
    procedimento: Yup.string().required(),
    processo: Yup.string().required(),
    fase: Yup.string().required(),
    operadora: Yup.string().required(),
    atendimento: Yup.string().required(),
    cid: Yup.string().required(),
    nome_responsavel: Yup.string().required(),
    email_responsavel: Yup.string().required(),
    tel_responsavel: Yup.string().required(),
    nome_prestador: Yup.string().required(),
    code_prestador: Yup.string().required(),
    data_inicio: Yup.string().required(),
    data_previsao: Yup.string().required()
  });

  try {
    await schema.validate(body);
  } catch (err: any) {
    throw new AppError(err.message);
  }

  const procedures = await CreateProcedimentoService({
    ...body
  });

  const io = getIO();
  io.emit("procedure", {
    action: "create",
    procedures
  });

  return res.status(201).json({
    message: "Procedimento criado com sucesso!",
    data: procedures
  });
};

export const index = async (req: Request, res: Response): Promise<Response> => {
  const procedures = await ListProcedimentosService();

  return res.status(200).json(procedures);
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { procedureId } = req.params;

  const procedure = await ShowProcedimentosService(procedureId);

  return res.status(200).json(procedure);
};
