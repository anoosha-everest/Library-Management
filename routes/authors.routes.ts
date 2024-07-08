const express=require('express');
const router=express.Router();
import {authors} from '../Models/authors';

// Get all authors
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const author = await authors.findAll();
        if (author.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({authors: author});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
router.get('/:id', async (req, res) => {
    try {
        const author = await authors.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "authors Not Found" });
        }
        res.json(author);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
router.post('/', async (req, res) => {
    try {
        const author = await authors.create(req.body);
        res.json(author);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await authors.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await authors.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "authors Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await authors.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "authors Deleted" });
        } else {
            res.status(404).json({ message: "authors Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;