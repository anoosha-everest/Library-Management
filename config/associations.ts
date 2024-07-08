import { authors } from "../Models/authors";
import { books } from "../Models/books";
import { members } from "../Models/members";
import { loans } from "../Models/loans";
import { reservations } from "../Models/reservations";
const associate=(async()=>{
    authors.hasMany(books,{onDelete:'CASCADE',
    onUpdate:'CASCADE'});
    books.belongsTo(authors,{onDelete:'CASCADE',
    onUpdate:'CASCADE'});

    books.hasMany(loans, { foreignKey: 'book_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'            
});
    loans.belongsTo(books, { foreignKey: 'book_id',onDelete:'CASCADE',
    onUpdate:'CASCADE'});

    members.hasMany(loans, { foreignKey : 'member_id', onDelete:'CASCADE',
    onUpdate:'CASCADE'});
    loans.belongsTo(members, { foreignKey : 'member_id',onDelete:'CASCADE',
    onUpdate:'CASCADE'});

    books.hasMany(reservations, { foreignKey: 'book_id',onDelete:'CASCADE',
    onUpdate:'CASCADE' });
    reservations.belongsTo(books, { foreignKey: 'book_id',onDelete:'CASCADE',
    onUpdate:'CASCADE'});

    members.hasMany(reservations, { foreignKey : 'member_id',onDelete:'CASCADE',
    onUpdate:'CASCADE' });
    reservations.belongsTo(members, { foreignKey : 'member_id',onDelete:'CASCADE',
    onUpdate:'CASCADE'});
});


export{associate};