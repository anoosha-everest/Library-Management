import { reservations } from "../Models/reservations";
import {books} from "../Models/books";
//get title of the book which is reserved by a particular member
async function findBookTitleByMember(id:number){
    const bookId:any=await reservations.findAll({
        where:{
            member_id:id
        },
        attributes:['book_id']
    })
    const bookIds:any=bookId.map(book=>book.book_id);
    const titles:any=books.findAll({
        where:{
            id:bookIds
        },
        attributes:['title']
    })
    return titles;
};

//count of books reserved
export async function findBooksReserved(){
    const cnt=await reservations.aggregate('book_id', 'count', { distinct: true });
    return cnt;
}



export default findBookTitleByMember;