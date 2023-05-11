/* eslint-disable */
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Procedimentos", "prioridade", {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Procedimentos", "prioridade");
  },
};
