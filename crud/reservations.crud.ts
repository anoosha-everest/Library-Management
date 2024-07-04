import { reservations } from "../Models/reservations";

async function createReservation(data:any) {
    try {
        const reserve = await reservations.create(data);
        console.log('created reservation');
        
      } catch (error) {
      console.error('Error in creating reservation');
      throw error;
    }
  }

const data={
    book_id: 4,
    member_id:1,
    reservation_date:'2024-08-30'
};
// createReservation(data);


async function readReservationById(id:any) {
    try {
      const reserve = await reservations.findOne({ where: { id: id } });
      if (reserve) {
        console.log('reservation found:',reserve.toJSON());
        return reserve;
      } else {
        console.log('reservation not found');
        return null;
      }
    } catch (error) {
      console.error('Error finding reservation:', error);
      throw error;
    }
  }
  
 
const reserveId = 3;
// readReservationById(reserveId);


async function readAllReservations() {
    try {
      const reserve = await reservations.findAll();
      console.log('All Reservations:',reserve.map(reserve =>reserve.toJSON()));
      return reserve;
    } catch (error) {
      console.error('Error reading Reservations:', error);
    }
  }
  

// readAllReservations();

async function updateReservationById(id:any, newData:any) {
    try {
      await reservations.update(newData, {
        where: { id: id }
      });
      console.log('reservation updated successfully');
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
}
const newData={
    book_id: 3,
    member_id:2,
    reservation_date:'2024-12-30'
}
// updateReservationById(4,newData);

async function deleteReservationById(id:any) {
    try {
      await reservations.destroy({
        where: { id: id }
      });
      console.log('reservation deleted successfully');
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
}

// deleteReservationById(5);

export{createReservation,readReservationById,readAllReservations,updateReservationById,deleteReservationById};