
import UserModel from "../model/User.js";
import { getNextSequence } from "./counter.js";


const createUser = async (req, res) => {
    const newdata = req.body;
    const userExit = await UserModel.findOne({ useremail: req.body.useremail });

    if (userExit) {
        return res.json({ message: "user already exits" });
    } else {
        try {
            const seq = await getNextSequence("USER");
            const userId = `U-${String(seq).padStart(3, "0")}`;
            newdata.userId = userId;
            const data = await UserModel.create(newdata);
            res.json({ message: "Create User", data: data });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }
};


const getUser = async (req, res) => {
    const data = await UserModel.find();
    await res.json({ message: "Get User", data: data });
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const updatedata = req.body;
    const data = await UserModel.updateOne({ userId: id }, updatedata);
    await res.json({ message: "Update User", data: data });
};

const deleteUser = async (req, res) => {
    const id = req.params;
    console.log(id.id);
    const data = await UserModel.deleteOne({ userId: id.id });
    await res.json({ message: "delete user" });
};

const getuserbyid = async (req, res) => {
    const id = req.params;
    console.log(id.id)
    const data = await UserModel.findOne({ userId: id.id });
    await res.json({ message: "get single user", data: data });
};

export default { getUser, updateUser, deleteUser, getuserbyid, createUser };