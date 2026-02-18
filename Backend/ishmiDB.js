import 'dotenv/config'
import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URl)
        console.log(" Database connect successfully")
    } catch (error) {
        
        console.log("Error occured while connection database",error.message)
        process.exit(1);
    }
}
export default connectDB;