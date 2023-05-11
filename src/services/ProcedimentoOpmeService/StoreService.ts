/* eslint-disable */
import AppError from "../../errors/AppError";
import ProcedimentoOpme from "../../models/ProcedimentoOpme";

interface Request {
  codigo: string;
  qtde_solicitada: number;
  divergencia: string;
  descricao: string;
  qtd_sugerida: number;
  procedimentoId: number;
}

const CreateProcedimentoOpmeService = async ({
  codigo,
  qtde_solicitada,
  divergencia,
  descricao,
  qtd_sugerida,
  procedimentoId
}: Request): Promise<ProcedimentoOpme> => {
  const procedureOpme = await ProcedimentoOpme.create({
    codigo,
    qtde_solicitada,
    divergencia,
    descricao,
    qtd_sugerida,
    procedimentoId
  });

  return procedureOpme;
};

export default CreateProcedimentoOpmeService;
