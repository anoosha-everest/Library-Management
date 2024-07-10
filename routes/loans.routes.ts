const express=require('express');
const router=express.Router();
import {loans} from '../Models/loans';
import query from '../queries/loans_query';

// Get all loans
router.get('/', async (req, res) => {
    try {
        const loan = await loans.findAll();
        if (loan.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({loans: loan});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one loan
router.get('/:id', async (req, res) => {
    try {
        const loan = await loans.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "loans Not Found" });
        }
        res.json(loan);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new loan
router.post('/', async (req, res) => {
    try {
        const loan = await loans.create(req.body);
        res.json(loan);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Update a loan
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await loans.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedloan = await loans.findByPk(req.params.id);
            res.json(updatedloan);
        } else {
            res.status(404).json({ message: "loans Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Delete a loan
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await loans.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "loans Deleted" });
        } else {
            res.status(404).json({ message: "loans Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Route to get book titles by author ID
router.get('/books/available', async (req, res) => {
    try {
        const date = req.body;
        console.log("hello",date);
        const bookTitles = await query(date.start,date.end);
        console.log(date.start);
        res.json({ bookTitles });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching book titles' });
      }
});

export default router;