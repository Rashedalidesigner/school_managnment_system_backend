import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    AssignmentId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    assignmentDate: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
});

const AssignmentModel = mongoose.model("Assignment", AssignmentSchema);

export default AssignmentModel;