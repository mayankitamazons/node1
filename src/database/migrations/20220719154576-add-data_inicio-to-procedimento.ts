/* eslint-disable */
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Procedimentos", "data_inicio", {
      type: DataTypes.STRING,
      allowNull: true
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Procedimentos", "data_inicio");
  },
};
