/* eslint-disable */
import AppError from "../../errors/AppError";
import Procedimento from "../../models/Procedimento";

interface Request {
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

const CreateProcedimentoService = async ({
  admin,
  prioridade,
  procedimento,
  processo,
  fase,
  operadora,
  atendimento,
  cid,
  nome_responsavel,
  email_responsavel,
  tel_responsavel,
  nome_prestador,
  code_prestador,
  data_inicio,
  data_previsao
}: Request): Promise<Procedimento> => {
  if (processo) {
    const procedureExists = await Procedimento.findOne({
      where: {
        processo
      }
    });

    if (procedureExists) {
      throw new AppError("ERRO_PROCEDIMENTO_DUPLICADO");
    }
  }

  const procedure = await Procedimento.create(
    {
      admin,
      prioridade,
      procedimento,
      processo,
      fase,
      operadora,
      atendimento,
      cid,
      nome_responsavel,
      email_responsavel,
      tel_responsavel,
      nome_prestador,
      code_prestador,
      data_inicio,
      data_previsao
    },
    {
      include: ["beneficiarioInfo", "opmeInfo", "laudoInfo"]
    }
  );

  return procedure;
};

export default CreateProcedimentoService;
