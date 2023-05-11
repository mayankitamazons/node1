/* eslint-disable */
import * as Yup from "yup";
import { Request, Response } from "express";
import { getIO } from "../libs/socket";
import AppError from "../errors/AppError";
import CreateBeneficiarioService from "../services/BeneficiarioService/CreateBeneficiarioService";

interface BeficiaryData {
  nome: string;
  carterinha: string;
  plano: string;
  anterior_lei_9656_58: string;
  sexo: string;
  data_nascimento: string;
  localidade: string;
  uf: string;
  procedimentoId: number;
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  const body: BeficiaryData = req.body;

  const schema = Yup.object().shape({
    nome: Yup.string().required(),
    carterinha: Yup.string().required(),
    plano: Yup.string().required(),
    anterior_lei_9656_58: Yup.string().required(),
    sexo: Yup.string().required(),
    data_nascimento: Yup.string().required(),
    localidade: Yup.string().required(),
    uf: Yup.string().required(),
    procedimentoId: Yup.number().required(),
  })

  try {
    await schema.validate(body);
  } catch (error: any) {
    throw new AppError(error.message);
  }

  const beneficiary = await CreateBeneficiarioService({...body})

  const io = getIO();
  io.emit("beneficiary", {
    action: "create",
    beneficiary
  })

  return res.status(201).json({
    message: "Beneficiário criado com sucesso!",
    data: beneficiary
  })
}