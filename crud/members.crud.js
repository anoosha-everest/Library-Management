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
exports.deleteMemberById = exports.updateMemberById = exports.readAllMembers = exports.readMemberById = exports.createMember = void 0;
var members_1 = require("../Models/members");
function createMember(data) {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.members.create(data)];
                case 1:
                    member = _a.sent();
                    console.log('created member');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error in creating member');
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createMember = createMember;
var data = {
    name: 'Soumya',
    address: 'Mancherial',
    phone_number: '9995533218',
    email: 'soumya@gmail.com'
};
createMember(data);
function readMemberById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.members.findOne({ where: { id: id } })];
                case 1:
                    member = _a.sent();
                    if (member) {
                        console.log('member found:', member.toJSON());
                        return [2 /*return*/, member];
                    }
                    else {
                        console.log('member not found');
                        return [2 /*return*/, null];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error finding member:', error_2);
                    throw error_2;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.readMemberById = readMemberById;
var memId = 3;
readMemberById(memId);
function readAllMembers() {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.members.findAll()];
                case 1:
                    member = _a.sent();
                    console.log('AlleBooks:', member.map(function (member) { return member.toJSON(); }));
                    return [2 /*return*/, member];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error reading Books:', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.readAllMembers = readAllMembers;
readAllMembers();
function updateMemberById(id, newData) {
    return __awaiter(this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.members.update(newData, {
                            where: { id: id }
                        })];
                case 1:
                    _a.sent();
                    console.log('member updated successfully');
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error('Error updating member:', error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateMemberById = updateMemberById;
var newData = {
    name: 'Keerthi',
    address: 'Medak',
    email: 'keerthi@gmail.com'
};
updateMemberById(4, newData);
function deleteMemberById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.members.destroy({
                            where: { id: id }
                        })];
                case 1:
                    _a.sent();
                    console.log('member deleted successfully');
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error('Error deleting member:', error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteMemberById = deleteMemberById;
deleteMemberById(5);
