// import { authors } from './Models/authors';
// import { books } from './Models/books';
// import { members } from './Models/members';
// import { loans } from './Models/loans';
// import { reservations } from './Models/reservations';
import { insertAuthors } from './data/auth_data';
import { insertBooks } from './data/books_data';
import { insertMembers } from './data/mem_data';
import { insertLoans } from './data/loans_data';
import { insertReserve } from './data/reserve_data';
import { connection } from './Models/connection';
import {authors,books,members,loans,reservations} from './data/associations';
const sequelize=connection;

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
createTableAuthor();

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database synchronized');

        return Promise.all([insertAuthors(), insertBooks(),insertMembers()]).then(() => insertLoans()).then(()=>insertReserve());
    })
    .catch(error => {
        console.error('Error synchronizing the database:', error);
    });

