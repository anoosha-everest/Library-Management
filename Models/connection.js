"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var sequelize_1 = require("sequelize");
// Create sequelize instance with logging enabled
var connection = new sequelize_1.Sequelize('course', 'anoosha', 'anoosha', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.connection = connection;
