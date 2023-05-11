"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("UserCustomer", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            adminId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            crm: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            uf: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: false
            },
            usuario: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            passwordHash: {
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
        return queryInterface.dropTable("UserCustomer");
    }
};
