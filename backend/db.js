import mongoose from "mongoose";
import "dotenv/config";


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongo_URI,);
            console.log(' mongoDB connected')
        }catch (error){
            console.error('mongoDB connection error:', error)
          
    }
}
export default connectDB
