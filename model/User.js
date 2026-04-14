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
        required: true,
    },
    useremail: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const UserModel = mongoose.model("User", User);

export default UserModel;