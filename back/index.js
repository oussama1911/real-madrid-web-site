import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import lastgameRouter from './routes/lastgameRouter.js';
import newsRouter from './routes/newsRouter.js';
import picsRouter from './routes/picsRouter.js';
import nextgameRouter from './routes/nextgameRouter.js';
import playersRouter from './routes/playersRouter.js';
import productRouter from './routes/productRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import cartRouter from './routes/cartRouter.js';





dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB not connected', err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/news', newsRouter);
app.use('/api/pics', picsRouter);
app.use('/api/nextgame', nextgameRouter);
app.use('/api/players', playersRouter);
app.use('/api/lastgame', lastgameRouter);
app.use('/api/products', productRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Route or methode incorrect' });
});




app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});

