import { authors } from "../Models/authors";
import { books } from "../Models/books";
import { members } from "../Models/members";
import { loans } from "../Models/loans";
import { reservations } from "../Models/reservations";

authors.hasMany(books,{foreignKey:'authorId'});
books.belongsTo(authors,{foreignKey:'authorId'});

books.hasMany(loans,{foreignKey:'book_id'});
loans.belongsTo(books,{foreignKey:'book_id'});

members.hasMany(loans,{foreignKey:'member_id'});
loans.belongsTo(members,{foreignKey:'member_id'});

books.hasMany(reservations,{foreignKey:'book_id'});
reservations.belongsTo(books,{foreignKey:'book_id'});

members.hasMany(reservations,{foreignKey:'member_id'});
reservations.belongsTo(members,{foreignKey:'member_id'});

export{authors,books,members,loans,reservations};