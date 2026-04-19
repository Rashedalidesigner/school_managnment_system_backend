import mongoose from "mongoose";

const TeacherLeaveSchema = new mongoose.Schema({
    TeacherId: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
    duration: {
        type: String,
        required: true,
    },
});

const TeacherLeaveModel = mongoose.model("TeacherLeave", TeacherLeaveSchema);

export default TeacherLeaveModel;