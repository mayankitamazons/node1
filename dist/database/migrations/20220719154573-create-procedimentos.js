"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("Procedimentos", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            admin: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            procedimento: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            processo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            fase: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            operadora: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            atendimento: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            cid: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            nome_responsavel: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            email_responsavel: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            tel_responsavel: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            nome_prestador: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            code_prestador: {
                type: sequelize_1.DataTypes.STRING,
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
        return queryInterface.dropTable("Procedimentos");
    }
};
