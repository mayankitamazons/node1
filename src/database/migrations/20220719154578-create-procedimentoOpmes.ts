import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("ProcedimentoOpmes", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      qtde_solicitada: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      divergencia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      procedimentoId: {
        type: DataTypes.INTEGER,
        references: { model: "Procedimentos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("ProcedimentoOpmes");
  }
};
