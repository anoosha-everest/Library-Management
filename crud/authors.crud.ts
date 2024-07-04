import { authors } from "../Models/authors";

//function to create a new data
function createData(data:any){
    const author = authors.create(data);
    console.log("created user");
}

const data={
    name: 'Hareesh', 
    birth_year:2000,
    nationality:'India'
};
createData(data);
