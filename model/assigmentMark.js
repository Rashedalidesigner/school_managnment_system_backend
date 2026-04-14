import mongoose from "mongoose";

const assignmentMarkSchema = new mongoose.Schema({
    AssignmentId: {
        type: String,
        required: true,
    },
    StudentId: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
});

const AssignmentMarkModel = mongoose.model("AssignmentMark", assignmentMarkSchema);


export default AssignmentMarkModel;