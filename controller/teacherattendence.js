import TeacherAttendenceModel from "../model/TeacherAttendence.js";

const getTeacherAttendence = async (req, res) => {
    const data = await TeacherAttendenceModel.find();
    res.json({ message: "Get Teacher Attendence", data: data });
}

const createTeacherAttendence = async (req, res) => {
    const newdata = req.body;
    const data = await TeacherAttendenceModel.create(newdata);
    res.json({ message: "Create Teacher Attendence", data: data });
}

const updateTeacherAttendence = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await TeacherAttendenceModel.updateOne({ TeacherId: id }, updatedata);
    res.json({ message: "Update Teacher Attendence", data: data });
}

const deleteTeacherAttendence = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherAttendenceModel.deleteOne({ TeacherId: id });
    res.json({ message: "Delete Teacher Attendence", data: data });
}

const getTeacherAttendenceById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherAttendenceModel.findOne({ TeacherId: id });
    res.json({ message: "Get Single Teacher Attendence", data: data });
}

export default { getTeacherAttendence, createTeacherAttendence, updateTeacherAttendence, deleteTeacherAttendence, getTeacherAttendenceById };