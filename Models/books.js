"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
var sequelize_1 = require("sequelize");
var authors_1 = require("./authors");
var connection_1 = require("../config/connection");
var sequelize = connection_1.connection;
exports.books = sequelize.define('books', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: authors_1.authors,
            key: 'id',
        }, onDelete: 'CASCADE', onUpdate: 'CASCADE',
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(13),
        unique: true,
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    tableName: 'books',
    timestamps: false
});
