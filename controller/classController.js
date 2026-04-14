import ClassModel from "../model/ClassSchama.js";

const getclass = async (req, res) => {
    const data = await ClassModel.find();
    res.json({ message: "Get Class", data: data });
}

const createclass = async (req, res) => {
    const newdata = req.body;
    const data = await ClassModel.create(newdata);
    res.json({ message: "Create Class", data: data });
}

const updateclass = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await ClassModel.updateOne({ ClassId: id }, updatedata);
    res.json({ message: "Update Class", data: data });
}

const deleteclass = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await ClassModel.deleteOne({ ClassId: id });
    res.json({ message: "Delete Class", data: data });
}

const getclassById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await ClassModel.findOne({ ClassId: id });
    res.json({ message: "Get Single Class", data: data });
}

export default { getclass, createclass, updateclass, deleteclass, getclassById };