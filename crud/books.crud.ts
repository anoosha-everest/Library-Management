import { books } from "../Models/books";

async function createBook(data:any) {
    try {
        const Book = await books.create(data);
        console.log('created Book');
        
      } catch (error) {
      console.error('Error in creating Book');
      throw error;
    }
  }

const data={
    title: 'All is Well', 
    authorId:1,
    genre:'Philosophy' ,
    isbn:'1011',
    publication_year:2050
};
createBook(data);


async function readBookById(id:any) {
    try {
      const Book = await books.findOne({ where: { id: id } });
      if (Book) {
        console.log('Book found:',Book.toJSON());
        return Book;
      } else {
        console.log('Book not found');
        return null;
      }
    } catch (error) {
      console.error('Error finding Book:', error);
      throw error;
    }
  }
  
 
const bookId = 3; 
readBookById(bookId);


async function readAllBooks() {
    try {
      const Book = await books.findAll();
      console.log('AlleBooks:',Book.map(Book =>Book.toJSON()));
      return Book;
    } catch (error) {
      console.error('Error reading Books:', error);
    }
  }
  

readAllBooks();

async function updateBookById(id:any, newData:any) {
    try {
      await books.update(newData, {
        where: { id: id }
      });
      console.log('Book updated successfully');
    } catch (error) {
      console.error('Error updating Book:', error);
    }
}
const newData={
    title: 'Die with Your Die', 
    genre:'Philosophy' ,
    isbn:'1019'
}
updateBookById(4,newData);

async function deleteBookById(id:any) {
    try {
      await books.destroy({
        where: { id: id }
      });
      console.log('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting Book:', error);
    }
}

deleteBookById(5);

export{createBook,readBookById,readAllBooks,updateBookById,deleteBookById};