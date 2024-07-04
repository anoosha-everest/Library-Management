import { loans } from "../Models/loans";

async function createLoan(data:any) {
    try {
        const loan = await loans.create(data);
        console.log('created loan');
        
      } catch (error) {
      console.error('Error in creating loan');
      throw error;
    }
  }

const data={
    book_id: 2,
    member_id:3,
    loan_date:'2024-07-06',
    due_date:'2024-07-07' 
};
createLoan(data);


async function readLoanById(id:any) {
    try {
      const loan = await loans.findOne({ where: { id: id } });
      if (loan) {
        console.log('loan found:',loan.toJSON());
        return loan;
      } else {
        console.log('loan not found');
        return null;
      }
    } catch (error) {
      console.error('Error finding loan:', error);
      throw error;
    }
  }
  
 
const loanId = 3; 
readLoanById(loanId);


async function readAllLoans() {
    try {
      const loan = await loans.findAll();
      console.log('All Loans:',loan.map(loan =>loan.toJSON()));
      return loan;
    } catch (error) {
      console.error('Error reading Loans:', error);
    }
  }
  

readAllLoans();

async function updateLoanById(id:any, newData:any) {
    try {
      await loans.update(newData, {
        where: { id: id }
      });
      console.log('loan updated successfully');
    } catch (error) {
      console.error('Error updating loan:', error);
    }
}
const newData={
    book_id: 2,
    member_id:4,
    loan_date:'2024-07-08',
    due_date:'2024-07-10' 
}
updateLoanById(4,newData);

async function deleteLoanById(id:any) {
    try {
      await loans.destroy({
        where: { id: id }
      });
      console.log('loan deleted successfully');
    } catch (error) {
      console.error('Error deleting loan:', error);
    }
}

deleteLoanById(5);

export{createLoan,readLoanById,readAllLoans,updateLoanById,deleteLoanById};