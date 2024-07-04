import { authors } from "../Models/authors";

//function to create a new data
// function createData(data:any){
//     const author = authors.create(data);
//     console.log("created author");
// }
async function createAuthor(data:any) {
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
createAuthor(data);


async function readAuthorById(id:any) {
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
readAuthorById(authorId);

async function updateAuthorById(id:any, newData:any) {
    try {
      await authors.update(newData, {
        where: { id: id }
      });
      console.log('Author updated successfully');
    } catch (error) {
      console.error('Error updating author:', error);
    }
}
const newData={
    name: 'Goldie', 
    birth_year:2029
}
updateAuthorById(4,newData);
