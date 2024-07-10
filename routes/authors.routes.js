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
var express = require('express');
var router = express.Router();
var authors_1 = require("../Models/authors");
var authors_query_1 = require("../queries/authors_query");
// Get all authors
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, authors_1.authors.findAll()];
            case 1:
                author = _a.sent();
                if (author.length === 0)
                    return [2 /*return*/, res.status(404).json({ message: "No Authors Found" })];
                res.json({ authors: author });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get one author
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, authors_1.authors.findByPk(req.params.id)];
            case 1:
                author = _a.sent();
                if (author === null) {
                    return [2 /*return*/, res.status(404).json({ message: "authors Not Found" })];
                }
                res.json(author);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json({ message: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Create a new author
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var author, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, authors_1.authors.create(req.body)];
            case 1:
                author = _a.sent();
                res.json(author);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json({ message: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Update an author
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updated, updatedAuthor, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, authors_1.authors.update(req.body, { where: { id: req.params.id } })];
            case 1:
                updated = (_a.sent())[0];
                if (!updated) return [3 /*break*/, 3];
                return [4 /*yield*/, authors_1.authors.findByPk(req.params.id)];
            case 2:
                updatedAuthor = _a.sent();
                res.json(updatedAuthor);
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: "authors Not Found" });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_4 = _a.sent();
                res.status(500).json({ message: err_4.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// Delete an author
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, authors_1.authors.destroy({ where: { id: req.params.id } })];
            case 1:
                deleted = _a.sent();
                if (deleted) {
                    res.json({ message: "authors Deleted" });
                }
                else {
                    res.status(404).json({ message: "authors Not Found" });
                }
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500).json({ message: err_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Route to get book titles by author ID
router.get('/:authorId/books', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorId, bookTitles, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                authorId = parseInt(req.params.authorId);
                if (isNaN(authorId)) {
                    return [2 /*return*/, res.status(400).json({ error: 'Invalid author ID' })];
                }
                return [4 /*yield*/, (0, authors_query_1.default)(authorId)];
            case 1:
                bookTitles = _a.sent();
                res.json({ bookTitles: bookTitles });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).json({ error: 'An error occurred while fetching book titles' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
