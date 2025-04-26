import express from 'express';
import Players from '../models/players.js';


const router = express.Router();
 

router.get('/', async (req, res) => {
    try {
        const players = await Players.find();
        if (players.length === 0) return res.status(404).json({ message: 'No players found' });
        res.status(200).json(players); // Remove [0] to return all players
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

 
router.get('/:id', async (req, res) => {
    try {
        const players = await Players.findById(req.params.id);
        if (!players) return res.status(404).json({ message: 'players not found' });
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const players = new Players(req.body);
        await players.save()
        res.status(201).json(players)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.put('/:id', async (req, res) => {
    try {
        const players = await Players.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!players) return res.status(404).json({ message: 'players not found' });
        res.status(200).json(players);
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.delete('/:id', async (req, res) => {
    try{
        const players = await new Players.findByIdAndDelete(req.params.id);
        if(!players) return res.status(404).json({message: 'players not found'});
        res.status(200).json({message: 'players deleted'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});


export default router;