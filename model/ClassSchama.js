import mongoose from "mongoose";

export const ClassSchema = new mongoose.Schema({
    ClassId: {
        type: String,
        required: true,
        unique: true,
    },
    className: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    classTeacher: {
        type: String,
        required: true,
    },
    studentCount: {
        type: Number,
        required: true,
    },
    classSchedule: {
        type: Object,
        required: true,
    },
    seation: {
        type: String,
        required: true,
    }
});

const ClassModel = mongoose.model("Class", ClassSchema);

export default ClassModel;