"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("ProcedimentoOpmes", "qtd_sugerida", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("ProcedimentoOpmes", "qtd_sugerida");
    }
};
