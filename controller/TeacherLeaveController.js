import TeacherLeaveModel from "../model/TeacherLeave.js";

const getTeacherLeave = async (req, res) => {
    const data = await TeacherLeaveModel.find();
    res.json({ message: "Get Teacher Leave", data: data });
}

const createTeacherLeave = async (req, res) => {
    const newdata = req.body;
    const data = await TeacherLeaveModel.create(newdata);
    res.json({ message: "Create Teacher Leave", data: data });
}

const updateTeacherLeave = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await TeacherLeaveModel.updateOne({ TeacherId: id }, updatedata);
    res.json({ message: "Update Teacher Leave", data: data });
}

const deleteTeacherLeave = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherLeaveModel.deleteOne({ TeacherId: id });
    res.json({ message: "Delete Teacher Leave", data: data });
}

const getTeacherLeaveById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherLeaveModel.findOne({ TeacherId: id });
    res.json({ message: "Get Single Teacher Leave", data: data });
}

export default { getTeacherLeave, createTeacherLeave, updateTeacherLeave, deleteTeacherLeave, getTeacherLeaveById };
