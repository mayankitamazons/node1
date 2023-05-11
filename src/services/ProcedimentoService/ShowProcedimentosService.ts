import Procedimento from "../../models/Procedimento";
import AppError from "../../errors/AppError";

const ShowProcedimentosService = async (
  id: number | string
): Promise<Procedimento> => {
  const procedure = await Procedimento.findByPk(id, {
    include: ["beneficiarioInfo", "laudoInfo", "opmeInfo"]
  });

  if (!procedure) {
    throw new AppError("ERROR_PROCEDIMENTO_NAO_ENCONTRADO", 404);
  }

  return procedure;
};

export default ShowProcedimentosService;
