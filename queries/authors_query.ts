import { books } from '../Models/books';
import {authors} from '../Models/authors';

async function findBookTitlesByAuthor(authorId: number) {
  const authorWithBooks:any = await authors.findByPk(authorId, {
    include: {
      model: books,
      attributes: ['title'] // Only include the title attribute from books
    },
    // attributes: ['birth_year'] // Optionally, exclude author attributes if you only need book titles
  });

  if (!authorWithBooks) {
    return [];
  }

  return authorWithBooks.books.map((book: any) => book.title);
}

// Finding author of the book
export async function findAuthorByBookTitle(title) {
  const book:any = await books.findOne({
    where: { title },
    include: {
      model: authors,
      attributes: ['name'] // You can specify which author attributes to retrieve
    }
  });

  if (book) {
    return book.author.name; // Assuming 'name' is an attribute of Author
  } else {
    return null; // Handle case where book not found
  }
}
export default findBookTitlesByAuthor;
