import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/talks");
        console.log("Connected to mongo db");
    } catch (error) {
        console.log("Error connecting to mongo",error.message)
    }
}
export default connectToMongoDB;