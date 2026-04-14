import mongoose from "mongoose";

const StudentAttendanceSchema = new mongoose.Schema({
    StudentId: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

const StudentAttendanceModel = mongoose.model("StudentAttendance", StudentAttendanceSchema);

export default StudentAttendanceModel;