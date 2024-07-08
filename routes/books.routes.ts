const express=require('express');
const router=express.Router();
import {books} from '../Models/books';

//get all books
router.get('/',async(req,res)=>{
    try{
        const book=await books.findAll();
        if(book.length===0)return res.status(404).json({message:'books not found'});
        res.json({books:book});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//get one book
router.get('/:id',async(req,res)=>{
    try{
        const book=await books.findByPk(req.params.id);
        if(!book){
            return res.status(500).json({message:'book not found'})
        }
        res.json(book);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//create a new book
router.post('/',async(req,res)=>{
    try{
        const book=await books.create(req.body);
        res.json(book);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//update a book
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await books.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await books.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "books Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
//delete a book
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await books.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
export default router;