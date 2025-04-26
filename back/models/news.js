import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
   title:{
        required:true,
        type:String
    },
    text:{
        required:true,
        type:String
    },
    imageUrl: String,
    
});

export default mongoose.model('news', newsSchema);