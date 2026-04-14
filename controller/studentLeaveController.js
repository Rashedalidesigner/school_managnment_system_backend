import StudentLeaveModel from "../model/StudentLeave.js";

const getStudentLeave = async (req, res) => {
    const data = await StudentLeaveModel.find();
    res.json({ message: "Get Student Leave", data: data });
}

const createStudentLeave = async (req, res) => {
    const newdata = req.body;
    console.log(newdata);
    const data = await StudentLeaveModel.create(newdata);
    res.json({ message: "Create Student Leave", data: data });
}

const updateStudentLeave = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await StudentLeaveModel.updateOne({ StudentId: id }, updatedata);
    res.json({ message: "Update Student Leave", data: data });
}

const deleteStudentLeave = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentLeaveModel.deleteOne({ StudentId: id });
    res.json({ message: "Delete Student Leave", data: data });
}

const getStudentLeaveById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentLeaveModel.findOne({ StudentId: id });
    res.json({ message: "Get Single Student Leave", data: data });
}

export default { getStudentLeave, createStudentLeave, updateStudentLeave, deleteStudentLeave, getStudentLeaveById };