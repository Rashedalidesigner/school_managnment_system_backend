import express from "express";

import UserController from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.get('/get', UserController.getUser);
userRouter.post("/create", UserController.createUser);
userRouter.delete("/delete/:id", UserController.deleteUser);
userRouter.put("/update/:id", UserController.updateUser);
userRouter.get("/get/:id", UserController.getuserbyid);

export default userRouter;