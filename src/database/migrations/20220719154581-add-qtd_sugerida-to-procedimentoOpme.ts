/* eslint-disable */
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("ProcedimentoOpmes", "qtd_sugerida", {
      type: DataTypes.STRING,
      allowNull: false
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("ProcedimentoOpmes", "qtd_sugerida");
  }
};
