import FeeModel from "../model/FeeSchama.js";

const getFee = async (req, res) => {
    const data = await FeeModel.find();
    res.json({ message: "Get Student fees", data: data });
}

const createFee = async (req, res) => {
    const newdata = req.body;
    const data = await FeeModel.create(newdata);
    res.json({ message: "Create Student fees", data: data });
}

const updateFee = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await FeeModel.updateOne({ studentId: id }, updatedata);
    res.json({ message: "Update Student fees", data: data });
}

const deleteFee = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await FeeModel.deleteOne({ studentId: id });
    res.json({ message: "Delete Student fees", data: data });
}

const getFeeById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await FeeModel.findOne({ studentId: id });
    res.json({ message: "Get Single Student fees", data: data });
}

export default { getFee, createFee, updateFee, deleteFee, getFeeById };