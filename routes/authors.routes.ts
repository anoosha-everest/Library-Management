const express=require('express');
const router=express.Router();
import {authors} from '../Models/authors';
import query,{findAuthors} from '../queries/authors_query';

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
        res.status(500).json({message: err.message});
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
        res.status(500).json({message: err.message});
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


// Route to get book titles by author ID
router.get('/:authorId/books', async (req, res) => {
    try {
        const authorId = parseInt(req.params.authorId);
        if (isNaN(authorId)) {
          return res.status(400).json({ error: 'Invalid author ID' });
        }
    
        const bookTitles = await query(authorId);
        res.json({ bookTitles });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching book titles' });
      }
});

//get all authors group by nationality and order by name
router.get('/grouping/ordering',async(req,res)=>{
    try {
        const auth = await findAuthors();
        res.json({ auth });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching authors' });
      }
})

export default router;