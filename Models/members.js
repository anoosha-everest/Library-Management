"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("./connection");
var sequelize = connection_1.connection;
exports.members = sequelize.define('members', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true,
    }
}, {
    tableName: 'members',
    timestamps: false
});
