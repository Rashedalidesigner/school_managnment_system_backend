import mongoose from "mongoose";


const StudentLeaveSchema = new mongoose.Schema({
    StudentId: {
        type: String,
        required: true,
    },
    leaveStatus: {
        type: String,
        default: "Pending",
    },
    reason: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

const StudentLeaveModel = mongoose.model("StudentLeave", StudentLeaveSchema);

export default StudentLeaveModel;