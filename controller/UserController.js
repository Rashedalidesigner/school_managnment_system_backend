import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../model/User.js";
import { getNextSequence } from "./counter.js";


const createUser = async (req, res) => {
    const newdata = req.body;
    const userExit = await UserModel.findOne({ useremail: req.body.useremail });

    if (userExit) {
        return res.json({ message: "user already exits" });
    } else {
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const seq = await getNextSequence("USER");
            const userId = `U-${String(seq).padStart(3, "0")}`;
            newdata.userId = userId;
            newdata.password = hashPassword;
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

const loginUser = async (req, res) => {
    try {
        const { useremail, password } = req.body;

        const user = await UserModel.findOne({ useremail });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong Password" });
        }

        const token = jwt.sign(
            { id: user._id, usertype: user.usertype },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login Success",
            token,
            user,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default { getUser, updateUser, loginUser, deleteUser, getuserbyid, createUser };