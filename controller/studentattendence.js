import StudentAttendenceModel from "../model/Studentattendence.js";

const getStudentAttendence = async (req, res) => {
    const data = await StudentAttendenceModel.find();
    res.json({ message: "Get Student Attendence", data: data });
}

const createStudentAttendence = async (req, res) => {
    const newdata = req.body;
    const data = await StudentAttendenceModel.create(newdata);
    res.json({ message: "Create Student Attendence", data: data });
}

const updateStudentAttendence = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await StudentAttendenceModel.updateOne({ StudentId: id }, updatedata);
    res.json({ message: "Update Student Attendence", data: data });
}

const deleteStudentAttendence = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentAttendenceModel.deleteOne({ StudentId: id });
    res.json({ message: "Delete Student Attendence", data: data });
}

const getStudentAttendenceById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentAttendenceModel.findOne({ StudentId: id });
    res.json({ message: "Get Single Student Attendence", data: data });
}

export default { getStudentAttendence, createStudentAttendence, updateStudentAttendence, deleteStudentAttendence, getStudentAttendenceById };