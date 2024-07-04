"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authors_1 = require("../Models/authors");
//function to create a new data
function createData(data) {
    var author = authors_1.authors.create(data);
    console.log("created user");
}
var data = {
    name: 'Hareesh',
    birth_year: 2000,
    nationality: 'India'
};
createData(data);
