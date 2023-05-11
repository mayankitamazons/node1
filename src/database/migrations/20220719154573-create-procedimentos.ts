import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("Procedimentos", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      admin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      procedimento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      processo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fase: {
        type: DataTypes.STRING,
        allowNull: false
      },
      operadora: {
        type: DataTypes.STRING,
        allowNull: false
      },
      atendimento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nome_responsavel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_responsavel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tel_responsavel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nome_prestador: {
        type: DataTypes.STRING,
        allowNull: false
      },
      code_prestador: {
        type: DataTypes.STRING,
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
    return queryInterface.dropTable("Procedimentos");
  }
};
