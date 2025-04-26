import mongoose from 'mongoose';

const lastgameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    score: { type: String, required: true },
});

export default mongoose.model('Lastgame', lastgameSchema);



