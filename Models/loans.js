"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loans = void 0;
var sequelize_1 = require("sequelize");
var members_1 = require("./members");
var books_1 = require("./books");
var connection_1 = require("./connection");
var sequelize = connection_1.connection;
exports.loans = sequelize.define('loans', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: books_1.books,
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: members_1.members,
            key: 'id'
        }
    },
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: 'loans',
    timestamps: false
});
