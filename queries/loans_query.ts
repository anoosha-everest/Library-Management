import {books} from '../Models/books';
import {authors} from '../Models/authors';
import {loans} from '../Models/loans';
import {Op} from 'sequelize';
//available books in given range
async function findBooksAvailable(startDate: Date, endDate: Date) {
    const loansInRange:any = await loans.findAll({
      where: {
        // loan_date:{[Op.gte]:startDate},
        due_date: { [Op.lt]: startDate }
      },
      attributes: ['book_id']
    });
  
    const loanedBookIds = loansInRange.map(loan => loan.book_id);
  
    const availableBooks:any = await books.findAll({
      where: {
        id: { [Op.in]: loanedBookIds }
      },
      attributes: ['title']
    });
  
    
    return availableBooks.map(book => book.title);
  }
  
  export default findBooksAvailable;