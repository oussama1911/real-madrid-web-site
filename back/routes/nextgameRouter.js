import express from 'express';
import Nextgame from '../models/nextgame.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const nextgame = await Nextgame.find();
        if (nextgame.length === 0) return res.status(404).json({ message: 'No nextgame found' });
        res.status(200).json(nextgame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const nextgame = await Nextgame.findById(req.params.id);
        if (!nextgame) return res.status(404).json({ message: 'nextgame not found' });
        res.status(200).json(nextgame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const nextgame = new Nextgame(req.body);
        await nextgame.save();
        res.status(201).json(nextgame);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const nextgame = await Nextgame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!nextgame) return res.status(404).json({ message: 'nextgame not found' });
        res.status(200).json(nextgame);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const nextgame = await Nextgame.findByIdAndDelete(req.params.id);
        if (!nextgame) return res.status(404).json({ message: 'nextgame not found' });
        res.status(200).json({ message: 'nextgame deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;