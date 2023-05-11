import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Beneficiarios", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      carterinha: {
        type: DataTypes.STRING,
        allowNull: true
      },
      plano: {
        type: DataTypes.STRING,
        allowNull: true
      },
      anterior_lei_9656_58: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      data_nascimento: {
        type: DataTypes.STRING,
        allowNull: true
      },
      localidade: {
        type: DataTypes.STRING,
        allowNull: true
      },
      uf: {
        type: DataTypes.STRING,
        allowNull: true
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
    return queryInterface.dropTable("Beneficiarios");
  }
};
