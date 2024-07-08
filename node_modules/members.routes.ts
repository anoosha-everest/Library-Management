const express=require('express');
const router=express.Router();
import {members} from '../Models/members';

// Get all members
router.get('/', async (req, res) => {
    try {
        // Fetch all members include books
        const member = await members.findAll();
        if (member.length === 0) return res.status(404).json({ message: "No Members Found" });
        res.json({members: member});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one member
router.get('/:id', async (req, res) => {
    try {
        const member = await members.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "members Not Found" });
        }
        res.json(member);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new member
router.post('/', async (req, res) => {
    try {
        const member = await members.create(req.body);
        res.json(member);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Update a member
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await members.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedMember = await members.findByPk(req.params.id);
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: "members Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Delete a member
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await members.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "members Deleted" });
        } else {
            res.status(404).json({ message: "members Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;