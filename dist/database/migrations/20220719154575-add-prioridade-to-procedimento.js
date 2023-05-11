"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Procedimentos", "prioridade", {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Procedimentos", "prioridade");
    },
};
