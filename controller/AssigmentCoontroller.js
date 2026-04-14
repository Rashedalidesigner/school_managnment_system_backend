import AssignmentModel from "../model/Assigment.js";

const getAssignment = async (req, res) => {
    const data = await AssignmentModel.find();
    res.json({ message: "Get Assignment", data: data });
}

const createassignment = async (req, res) => {

    const newdata = req.body;
    // console.log(newdata);
    const data = await AssignmentModel.create(newdata);
    res.json({ message: "Create Assignment", data: data });

}

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