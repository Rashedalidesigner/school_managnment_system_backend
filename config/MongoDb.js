import mongoose from "mongoose";

export const mongodbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb is connected");
    } catch (error) {
        console.log(error)
    }
}