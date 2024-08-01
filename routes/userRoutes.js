const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create /api/users/register
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Read - /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update /api/users/:id
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete /api/users/:id
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
