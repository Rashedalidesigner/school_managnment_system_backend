import StudentModel from "../model/StudentSchma.js";
import { getNextSequence } from "./counter.js";


const getStudent = async (req, res) => {
    const data = await StudentModel.find();
    res.json({ message: "Get Student", data: data });
}

const createStudent = async (req, res) => {
    try {
        const newdata = req.body;
        const seq = await getNextSequence("STUDENT");
        const studentId = `S-${String(seq).padStart(3, "0")}`;
        newdata.StudentId = studentId;
        const data = await StudentModel.create(newdata);
        res.json({ message: "Create Student", data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const updateStudent = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await StudentModel.updateOne({ StudentId: id }, updatedata);
    res.json({ message: "Update Student", data: data });
}

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentModel.deleteOne({ StudentId: id });
    res.json({ message: "Delete Student", data: data });
}

const getStudentById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await StudentModel.findOne({ StudentId: id });
    res.json({ message: "Get Single Student", data: data });
}

export default { getStudent, createStudent, updateStudent, deleteStudent, getStudentById };