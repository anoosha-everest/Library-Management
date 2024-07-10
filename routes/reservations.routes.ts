const express=require('express');
const router=express.Router();
import {reservations} from '../Models/reservations';
import query,{findBooksReserved} from '../queries/reservations_query';
// Get all reservations
router.get('/', async (req, res) => {
    try {
       
        const reservation = await reservations.findAll();
        if (reservation.length === 0) return res.status(404).json({ message: "No reservations Found" });
        res.json({reservations: reservation});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one reservation
router.get('/:id', async (req, res) => {
    try {
        const reservation = await reservations.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "reservation Not Found" });
        }
        res.json(reservation);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new reservation
router.post('/', async (req, res) => {
    try {
        const reservation = await reservations.create(req.body);
        res.json(reservation);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Update a reservation
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await reservations.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await reservations.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "reservation Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Delete a reservation
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await reservations.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "reservation Deleted" });
        } else {
            res.status(404).json({ message: "reservation Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Get book titles reserved by particular member
router.get('/member/:id', async (req, res) => {
    try {
        const mem = req.params.id;
        if (isNaN(mem)) {
            return res.status(404).json({ message: "reservation Not Found with member id" });
        }
        const titles=await query(mem);
        res.json(titles);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
//get count of books reserved
router.get('/books/count',async(req,res)=>{
    try {
        
        const cnt=await findBooksReserved();
        res.json(cnt);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

export default router;