/* eslint-disable */
import Procedimento from "../../models/Procedimento";
import AppError from "../../errors/AppError";

interface ProcedimentoCompleto extends Procedimento, Procedimento {}

const ListProcedimentosService = async (): Promise<ProcedimentoCompleto[]> => {
  const procedures: Procedimento[] = await Procedimento.findAll({
    include: ["beneficiarioInfo", "laudoInfo", "opmeInfo"]
  });

  if (!procedures) {
    throw new AppError("ERROR_PROCEDIMENTOs_NAO_ENCONTRADOs", 404);
  }

  return procedures;
};

export default ListProcedimentosService;
