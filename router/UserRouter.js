import express from "express";

import UserController from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.get('/', UserController.getUser);
userRouter.post("/add", UserController.createUser);
userRouter.delete("/delete/:id", UserController.deleteUser);
userRouter.put("/update/:id", UserController.updateUser);
userRouter.get("/:id", UserController.getuserbyid);

export default userRouter;