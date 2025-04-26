import express from 'express';
import Pics from '../models/pics.js';


const router = express.Router();
 

router.get('/', async (req, res) => {   
    try {
        const pics = await Pics.find();
        if (pics.length === 0) return res.status(404).json({ message: 'No pics found' });
        res.status(200).json(pics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const pics = await Pics.findById(req.params.id);
        if (!pics) return res.status(404).json({ message: 'pics not found' });
        res.status(200).json(pics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const pics = new Pics(req.body);
        await pics.save()
        res.status(201).json(pics)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.put('/:id', async (req, res) => {
    try {
        const pics = await Pics.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pics) return res.status(404).json({ message: 'pics not found' });
        res.status(200).json(pics);
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.delete('/:id', async (req, res) => {
    try{
        const pics = await new Pics.findByIdAndDelete(req.params.id);
        if(!pics) return res.status(404).json({message: 'pics not found'});
        res.status(200).json({message: 'pics deleted'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});


export default router;