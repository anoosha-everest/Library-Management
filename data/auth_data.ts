import { authors } from "../Models/authors";
const insertAuthors = async () => {
    try {
        const author = await authors.bulkCreate([
            { name: 'Anoosha', birth_year:2003,nationality:'India' },
            { name: 'Rekha', birth_year:2003,nationality:'Australia'},
            { name: 'Varun', birth_year:2005,nationality:'Afganistan' },
            { name: 'Mamatha',birth_year:2002,nationality:'Koria'},
            { name: 'Anusha',birth_year:1995,nationality:'Japan'}
        ]);
        console.log('Authors inserted successfully');
        return author;
    } catch (err) {
        console.error("Error inserting authors:", err);
        return null;
    }
};


export{insertAuthors};