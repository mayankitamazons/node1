"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("Beneficiarios", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            carterinha: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            plano: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            anterior_lei_9656_58: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            sexo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            data_nascimento: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            localidade: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            uf: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            procedimentoId: {
                type: sequelize_1.DataTypes.INTEGER,
                references: { model: "Procedimentos", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                allowNull: false
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("Beneficiarios");
    }
};
