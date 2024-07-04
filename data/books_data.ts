import { books } from "../Models/books";
const insertBooks = async () => {
    try {
        const book = await books.bulkCreate([
            { title: 'Do Epic Shit', authorId:1,genre:'Motivation' ,isbn:'1000',publication_year:2024},
            { title: 'Room No 105', authorId:2,genre:'Crime' ,isbn:'1001',publication_year:2004},
            { title: 'Alchemist', authorId:3,genre:'Comics' ,isbn:'1002',publication_year:2019},
            { title: 'Learning How to Fly', authorId:1,genre:'Motivation' ,isbn:'1003',publication_year:2014},
            { title: 'Attitude is Everything', authorId:4,genre:'Investigation' ,isbn:'1004',publication_year:2094},
            { title: 'You Can', authorId:3,genre:'Comics' ,isbn:'1005',publication_year:1390},
            { title: 'Do It Today', authorId:2,genre:'Crime',isbn:'1006',publication_year:1994}
        ]);
        console.log('books inserted successfully');
        return book;
    } catch (err) {
        console.error("Error inserting books:", err);
        return null;
    }
};
export{insertBooks};