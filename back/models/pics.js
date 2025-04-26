import mongoose from 'mongoose';

const picSchema = new mongoose.Schema({
   
    imageUrl: String,
    category: String
});

export default mongoose.model('pic', picSchema);