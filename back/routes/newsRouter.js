import express from 'express';
import News from '../models/news.js';

const router = express.Router();
 

router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        if (news.length === 0) return res.status(404).json({ message: 'No news found' });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save()
        res.status(201).json(news)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.put('/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!news) return res.status(404).json({ message: 'news not found' });
        res.status(200).json(news);
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
});



router.delete('/:id', async (req, res) => {
    try{
        const news = await News.findByIdAndDelete(req.params.id);
        if(!news) return res.status(404).json({message: 'news not found'});
        res.status(200).json({message: 'news deleted'});
    }catch(err){
        res.status(500).json({message: err.message})
    }
});


export default router;