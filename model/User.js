import mongoose from "mongoose";

const User = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
        default: "Student",
        required: true,
    },
    useremail: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
});


const UserModel = mongoose.model("User", User);

export default UserModel;