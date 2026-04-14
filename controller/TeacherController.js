import TeacherModel from "../model/TeacherSchma.js";


const getteacher = async (req, res) => {
    const data = await TeacherModel.find();
    res.json({ message: "Get Teacher", data: data });
}

const createteacher = async (req, res) => {
    const newdata = req.body;
    const data = await TeacherModel.create(newdata);
    res.json({ message: "Create Teacher", data: data });
}

const updateteacher = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await TeacherModel.updateOne({ TeacherId: id }, updatedata);
    res.json({ message: "Update Teacher", data: data });
}

const deleteteacher = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherModel.deleteOne({ TeacherId: id });
    res.json({ message: "Delete Teacher", data: data });
}

const getteacherById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await TeacherModel.findOne({ TeacherId: id });
    res.json({ message: "Get Single Teacher", data: data });
}


export default { getteacher, createteacher, updateteacher, deleteteacher, getteacherById };