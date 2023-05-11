"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Procedimentos", "data_inicio", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Procedimentos", "data_inicio");
    },
};
