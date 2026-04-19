import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    TeacherId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    hireDate: {
        type: String,
        required: true
    }
});

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

export default TeacherModel;