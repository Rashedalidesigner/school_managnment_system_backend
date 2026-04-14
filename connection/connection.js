import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://rashedalidesigner:Rashed56&gh@cluster0.bn9bafw.mongodb.net/student_management?appName=Cluster0");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;