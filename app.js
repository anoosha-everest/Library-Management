"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { QueryTypes } from 'sequelize';
var authors_1 = require("./Models/authors");
var books_1 = require("./Models/books");
var members_1 = require("./Models/members");
var loans_1 = require("./Models/loans");
var reservations_1 = require("./Models/reservations");
var auth_data_1 = require("./data/auth_data");
var books_data_1 = require("./data/books_data");
var mem_data_1 = require("./data/mem_data");
var loans_data_1 = require("./data/loans_data");
var reserve_data_1 = require("./data/reserve_data");
var connection_1 = require("./config/connection");
var associations_1 = require("./config/associations");
var authors_crud_1 = require("./crud/authors.crud");
var books_crud_1 = require("./crud/books.crud");
var members_crud_1 = require("./crud/members.crud");
var loans_crud_1 = require("./crud/loans.crud");
var reservations_crud_1 = require("./crud/reservations.crud");
var sequelize = connection_1.connection;
var express = require("express");
var app = express();
var authors_routes_1 = require("./routes/authors.routes");
var books_routes_1 = require("./routes/books.routes");
var members_routes_1 = require("./routes/members.routes");
var loans_routes_1 = require("./routes/loans.routes");
var reservations_routes_1 = require("./routes/reservations.routes");
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests
app.use(express.json()); // Middleware to parse JSON requests
// Test the database connection
sequelize.authenticate()
    .then(function () {
    console.log("Connection successful");
})
    .catch(function (err) {
    console.error("Unable to connect to the database:", err);
});
function createTableAuthor() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, authors_1.authors.sync({ force: true })];
                case 1:
                    _a.sent();
                    console.log("authors table created");
                    return [4 /*yield*/, books_1.books.sync({ force: true })];
                case 2:
                    _a.sent();
                    console.log("books table created");
                    return [4 /*yield*/, members_1.members.sync({ force: true })];
                case 3:
                    _a.sent();
                    console.log("members table created");
                    return [4 /*yield*/, loans_1.loans.sync({ force: true })];
                case 4:
                    _a.sent();
                    console.log("loans table created");
                    return [4 /*yield*/, reservations_1.reservations.sync({ force: true })];
                case 5:
                    _a.sent();
                    console.log("reservations table created");
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log("error in creating the tables", err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Function to synchronize database and insert data
function syncDatabaseAndInsertData() {
    return __awaiter(this, void 0, void 0, function () {
        var authorr, bookk, mem, loann, reserve, id, _a, results, metadata, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 13, , 14]);
                    return [4 /*yield*/, sequelize.sync({ force: true })];
                case 1:
                    _b.sent();
                    console.log('Database synchronized');
                    return [4 /*yield*/, createTableAuthor()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, associations_1.associate)()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, Promise.all([(0, auth_data_1.insertAuthors)(), (0, books_data_1.insertBooks)(), (0, mem_data_1.insertMembers)()])];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, loans_data_1.insertLoans)()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, reserve_data_1.insertReserve)()];
                case 6:
                    _b.sent();
                    console.log('Data inserted successfully');
                    return [4 /*yield*/, (0, authors_crud_1.readAllAuthors)()];
                case 7:
                    authorr = _b.sent();
                    console.log('All authors:', authorr);
                    return [4 /*yield*/, (0, books_crud_1.readAllBooks)()];
                case 8:
                    bookk = _b.sent();
                    console.log('All books:', bookk);
                    return [4 /*yield*/, (0, members_crud_1.readAllMembers)()];
                case 9:
                    mem = _b.sent();
                    console.log('All members:', mem);
                    return [4 /*yield*/, (0, loans_crud_1.readAllLoans)()];
                case 10:
                    loann = _b.sent();
                    console.log('All loans:', loann);
                    return [4 /*yield*/, (0, reservations_crud_1.readAllReservations)()];
                case 11:
                    reserve = _b.sent();
                    console.log('All reservations:', reserve);
                    id = 1;
                    return [4 /*yield*/, sequelize.query("SELECT * FROM authors")];
                case 12:
                    _a = _b.sent(), results = _a[0], metadata = _a[1];
                    console.table(results);
                    return [3 /*break*/, 14];
                case 13:
                    error_1 = _b.sent();
                    console.error('Error synchronizing the database:', error_1);
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    });
}
;
syncDatabaseAndInsertData();
// Ping route
app.use('/api/ping', (function (req, res) {
    res.json({ message: 'pong' });
}));
app.use('/api/authors', authors_routes_1.default);
app.use('/api/books', books_routes_1.default);
app.use('/api/members', members_routes_1.default);
app.use('/api/loans', loans_routes_1.default);
app.use('/api/reservations', reservations_routes_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
