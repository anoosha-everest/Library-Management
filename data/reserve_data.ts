import { reservations } from "../Models/reservations";
const insertReserve = async () => {
    try {
        const reserve = await reservations.bulkCreate([
            { book_id: 1,member_id:2,reservation_date:'2024-07-19'},
            { book_id:2 ,member_id:1,reservation_date:'2024-08-01' },
            { book_id:3,member_id:2,reservation_date:'2024-09-01' },
            { book_id: 4,member_id:3,reservation_date:'2024-10-18' },
            { book_id: 3,member_id:4,reservation_date:'2024-04-12' }
        ]);
        console.log('reserve inserted successfully');
        return reserve;
    } catch (err) {
        console.error("Error inserting reserve:", err);
        return null;
    }
};
export{insertReserve};