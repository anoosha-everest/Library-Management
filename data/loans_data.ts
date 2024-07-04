import { loans } from "../Models/loans";
const insertLoans = async () => {
    try {
        const loan = await loans.bulkCreate([
            { book_id: 1,member_id:1,loan_date:'2024-07-01',due_date:'2024-07-03' },
            { book_id:2 ,member_id:1,loan_date:'2024-07-04',due_date:'2024-07-09' },
            { book_id:3,member_id:2,loan_date:'2024-08-09',due_date:'2024-08-10' },
            { book_id: 4,member_id:3,loan_date:'2024-10-07',due_date:'2024-10-10' },
            { book_id: 3,member_id:4,loan_date:'2024-11-10',due_date:'2024-12-10' }
        ]);
        console.log('loans inserted successfully');
        return loan;
    } catch (err) {
        console.error("Error inserting loans:", err);
        return null;
    }
};
export{insertLoans};