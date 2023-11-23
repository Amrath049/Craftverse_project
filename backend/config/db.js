import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connectes to mongodb");
    }catch(error){
        console.error(`Error:`)
    }
}
export default connectDB;