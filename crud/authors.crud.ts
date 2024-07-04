import { authors } from "../Models/authors";

//function to create a new data
// function createData(data:any){
//     const author = authors.create(data);
//     console.log("created author");
// }
async function createData(data:any) {
    try {
        const author = await authors.create(data);
        console.log('created author');
        
      } catch (error) {
      console.error('Error in creating author');
      throw error;
    }
  }

const data={
    name: 'Hareesh', 
    birth_year:2000,
    nationality:'India'
};
createData(data);


async function readData(id:any) {
    try {
      const author = await authors.findOne({ where: { id: id } });
      if (author) {
        console.log('Author found:', author.toJSON());
        return author;
      } else {
        console.log('Author not found');
        return null;
      }
    } catch (error) {
      console.error('Error finding author:', error);
      throw error;
    }
  }
  
 
const authorId = 3; 
readData(authorId);


