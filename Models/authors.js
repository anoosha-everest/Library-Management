"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authors = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("./connection");
var sequelize = connection_1.connection;
var authors = sequelize.define('author', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    birth_year: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING(100),
    }
}, {
    tableName: 'authors',
    timestamps: false
});
exports.authors = authors;
