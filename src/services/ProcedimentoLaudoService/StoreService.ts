/* eslint-disable */
import AppError from "../../errors/AppError";
import ProcedimentoLaudo from "../../models/ProcedimentoLaudo";

interface Request {
  codigo: string;
  divergencia: string;
  titulo_descricao: string;
  descricao: string;
  procedimentoId: number;
}

const CreateProcedimentoLaudoService = async ({
  codigo,
  divergencia,
  titulo_descricao,
  descricao,
  procedimentoId
}: Request): Promise<ProcedimentoLaudo> => {
  const procedureReport = await ProcedimentoLaudo.create({
    codigo,
    divergencia,
    titulo_descricao,
    descricao,
    procedimentoId
  });

  return procedureReport;
};

export default CreateProcedimentoLaudoService;
