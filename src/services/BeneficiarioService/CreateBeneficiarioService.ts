/* eslint-disable */
import AppError from "../../errors/AppError";
import Beneficiario from "../../models/Beneficiario";

interface Request {
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

const CreateBeneficiarioService = async ({
  nome,
  carterinha,
  plano,
  anterior_lei_9656_58,
  sexo,
  data_nascimento,
  localidade,
  uf,
  procedimentoId
}: Request): Promise<Beneficiario> => {
  if (carterinha) {
    const beneficiaryExists = await Beneficiario.findOne({
      where: {
        carterinha
      }
    });

    if (beneficiaryExists) {
      throw new AppError("ERRO_BENEFICIARIO_DUPLICADO");
    }
  }

  const beneficiary = await Beneficiario.create({
    nome,
    carterinha,
    plano,
    anterior_lei_9656_58,
    sexo,
    data_nascimento,
    localidade,
    uf,
    procedimentoId
  });

  return beneficiary;
};

export default CreateBeneficiarioService;
