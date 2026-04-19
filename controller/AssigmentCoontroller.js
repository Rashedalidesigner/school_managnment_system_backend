import AssignmentModel from "../model/Assigment.js";
import { getNextSequence } from "./counter.js";


const getAssignment = async (req, res) => {
    const data = await AssignmentModel.find();
    res.json({ message: "Get Assignment", data: data });
}

const createassignment = async (req, res) => {
    try {
        const newdata = req.body;
        const seq = await getNextSequence("ASSIGNMENT");
        const assignmentId = `A-${String(seq).padStart(3, "0")}`;
        newdata.AssignmentId = assignmentId;
        const data = await AssignmentModel.create(newdata);
        res.json({ message: "Create Assignment", data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const updateassignment = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await AssignmentModel.updateOne({ AssignmentId: id }, updatedata);
    res.json({ message: "Update Assignment", data: data });
}

const deleteassignment = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await AssignmentModel.deleteOne({ AssignmentId: id });
    res.json({ message: "Delete Assignment", data: data });
}

const getassignmentById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await AssignmentModel.findOne({ AssignmentId: id });
    res.json({ message: "Get Single Assignment", data: data });
}

export default { getAssignment, createassignment, updateassignment, deleteassignment, getassignmentById };