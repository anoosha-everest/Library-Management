import {Sequelize} from 'sequelize';
// import { QueryTypes } from 'sequelize';
import { authors } from './Models/authors';
import { books } from './Models/books';
import { members } from './Models/members';
import { loans } from './Models/loans';
import { reservations } from './Models/reservations';
import { insertAuthors } from './data/auth_data';
import { insertBooks } from './data/books_data';
import { insertMembers } from './data/mem_data';
import { insertLoans } from './data/loans_data';
import { insertReserve } from './data/reserve_data';
import { connection } from './config/connection';
import {associate} from './config/associations';
import {createAuthor,readAuthorById,readAllAuthors,updateAuthorById,deleteAuthorById} from './crud/authors.crud';
import {createBook,readBookById,readAllBooks,updateBookById,deleteBookById} from './crud/books.crud';
import {createMember,readMemberById,readAllMembers,updateMemberById,deleteMemberById} from './crud/members.crud';
import {createLoan,readLoanById,readAllLoans,updateLoanById,deleteLoanById} from './crud/loans.crud';
import {createReservation,readReservationById,readAllReservations,updateReservationById,deleteReservationById} from './crud/reservations.crud';
const sequelize=connection;
import * as express from 'express';
const app:any = express();
import authorRoutes from './routes/authors.routes';
import bookRoutes from './routes/books.routes';
import memberRoutes from './routes/members.routes';
import loanRoutes from './routes/loans.routes';
import reservationRoutes from './routes/reservations.routes';
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests
app.use(express.json()); // Middleware to parse JSON requests

var bodyParser = require('body-parser');
// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

async function createTableAuthor () {
            try {
                await authors.sync({force : true});
                console.log("authors table created");
                await books.sync({force:true});
                console.log("books table created");
                await members.sync({force:true});
                console.log("members table created");
                await loans.sync({force:true});
                console.log("loans table created");
                await reservations.sync({force:true});
                console.log("reservations table created");
            
            } catch (err) {
                console.log("error in creating the tables",err);
            }
}


// Function to synchronize database and insert data
async function syncDatabaseAndInsertData() {
    try {
        
        await sequelize.sync({ force: true });
        console.log('Database synchronized');
        await createTableAuthor();
        await associate();
        await Promise.all([insertAuthors(), insertBooks(), insertMembers()]);
        await insertLoans();
        await insertReserve();
        console.log('Data inserted successfully');

        const authorr = await readAllAuthors();
        console.log('All authors:', authorr);
        const bookk = await readAllBooks();
        console.log('All books:', bookk);
        const mem = await readAllMembers();
        console.log('All members:', mem);
        const loann = await readAllLoans();
        console.log('All loans:', loann);
        const reserve = await readAllReservations();
        console.log('All reservations:', reserve);
        let id=1;
        const [results, metadata] = await sequelize.query("SELECT * FROM authors");
        console.table(results);
        const read = await sequelize.query(
            "SELECT * FROM authors WHERE id = :id",
            {
                replacements: { id },
                type: (sequelize as any).QueryTypes.SELECT
            }
        );
        console.table(read);
        
    } catch (error) {
        console.error('Error synchronizing the database:', error);
    }
};

syncDatabaseAndInsertData();

// Ping route
app.use('/api/ping', ((req, res) => {  
    res.json({ message: 'pong' });
}));

app.use('/api/authors',authorRoutes);
app.use('/api/books',bookRoutes);
app.use('/api/members',memberRoutes);
app.use('/api/loans',loanRoutes);
app.use('/api/reservations',reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
