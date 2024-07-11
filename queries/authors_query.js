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
exports.findAuthors = exports.findAuthorByBookTitle = void 0;
var books_1 = require("../Models/books");
var authors_1 = require("../Models/authors");
function findBookTitlesByAuthor(authorId) {
    return __awaiter(this, void 0, void 0, function () {
        var authorWithBooks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authors_1.authors.findByPk(authorId, {
                        include: {
                            model: books_1.books,
                            attributes: ['title'] // Only include the title attribute from books
                        },
                        // attributes: ['birth_year'] // Optionally, exclude author attributes if you only need book titles
                    })];
                case 1:
                    authorWithBooks = _a.sent();
                    if (!authorWithBooks) {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, authorWithBooks.books.map(function (book) { return book.title; })];
            }
        });
    });
}
// Finding author of the book
function findAuthorByBookTitle(title) {
    return __awaiter(this, void 0, void 0, function () {
        var book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, books_1.books.findOne({
                        where: { title: title },
                        include: {
                            model: authors_1.authors,
                            attributes: ['name'] // You can specify which author attributes to retrieve
                        }
                    })];
                case 1:
                    book = _a.sent();
                    if (book) {
                        return [2 /*return*/, book.author.name]; // Assuming 'name' is an attribute of Author
                    }
                    else {
                        return [2 /*return*/, null]; // Handle case where book not found
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.findAuthorByBookTitle = findAuthorByBookTitle;
// export async function findAuthors() {
//   try {
//       const authorsByNationality = await authors.findAll({
//           attributes: ['name', 'nationality'],
//           order: [['name', 'ASC']]
//       });
//       const nationalityCounts = await authors.findAll({
//           attributes: [
//               'nationality',
//               [Sequelize.fn('COUNT', Sequelize.col('name')), 'authorCount']
//           ],
//           group: ['nationality'],
//           order: [['nationality', 'ASC']]
//       });
//       return {
//           authorsByNationality,
//           nationalityCounts
//       };
//   } catch (error) {
//       console.error("Error finding authors with details:", error);
//       return null;
//   }
// }
function findAuthors() {
    return __awaiter(this, void 0, void 0, function () {
        var auth, groupedByNationality, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, authors_1.authors.findAll({
                            attributes: ['name', 'nationality'],
                            order: [['name', 'ASC']]
                        })];
                case 1:
                    auth = _a.sent();
                    groupedByNationality = auth.reduce(function (acc, author) {
                        var nationality = author.nationality;
                        if (!acc[nationality]) {
                            acc[nationality] = [];
                        }
                        acc[nationality].push(author);
                        return acc;
                    }, {});
                    return [2 /*return*/, groupedByNationality];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error finding authors:", error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.findAuthors = findAuthors;
exports.default = findBookTitlesByAuthor;
