import mongoose from "mongoose";

const TeacherAttendanceSchema = new mongoose.Schema({
    TeacherId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    checkIn: {
        type: String,
        required: true,
    },
    checkOut: {
        type: String,
        required: true,
    }
});

const TeacherAttendanceModel = mongoose.model("TeacherAttendance", TeacherAttendanceSchema);

export default TeacherAttendanceModel;