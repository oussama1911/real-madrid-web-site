import express from 'express';
import Lastgame from '../models/lastgame.js';

const router = express.Router();
 

router.get('/', async (req, res) => {
    try {
        const lastgame = await Lastgame.find();
        if (lastgame.length === 0) return res.status(404).json({ message: 'No lastgame found' });
        res.status(200).json(lastgame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const lastgame = await Lastgame.findById(req.params.id);
        if (!lastgame) return res.status(404).json({ message: 'lastgame not found' });
        res.status(200).json(lastgame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
});


router.post('/', async (req, res) => {
    try {
        const lastgame = new Lastgame(req.body);
        await lastgame.save();
        res.status(201).json(lastgame);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const lastgame = await Lastgame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lastgame) return res.status(404).json({ message: 'lastgame not found' });
        res.status(200).json(lastgame);
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const lastgame = await Lastgame.findByIdAndDelete(req.params.id);
        if(!lastgame) return res.status(404).json({message: 'lastgame not found'});
        res.status(200).json({message: 'lastgame deleted'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});


export default router;