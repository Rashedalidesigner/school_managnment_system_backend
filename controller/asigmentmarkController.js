import AssignmentMarkModel from "../model/assigmentMark.js";


const getAssignmentmark = async (req, res) => {
    const data = await AssignmentMarkModel.find();
    res.json({ message: "Get Assignment Mark", data: data });
}

const createassignmentmark = async (req, res) => {
    const newdata = req.body;
    const data = await AssignmentMarkModel.create(newdata);
    res.json({ message: "Create Assignment Mark", data: data });
}

const updateassignmentmark = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await AssignmentMarkModel.updateOne({ StudentId: id }, updatedata);
    res.json({ message: "Update Assignment Mark", data: data });
}

const deleteassignmentmark = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await AssignmentMarkModel.deleteOne({ StudentId: id });
    res.json({ message: "Delete Assignment Mark", data: data });
}

const getassignmentmarkById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await AssignmentMarkModel.findOne({ StudentId: id });
    res.json({ message: "Get Single Assignment Mark", data: data });
}

export default { getAssignmentmark, createassignmentmark, updateassignmentmark, deleteassignmentmark, getassignmentmarkById };