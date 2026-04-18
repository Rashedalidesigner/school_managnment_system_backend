import express from "express";

import studentLeaveController from "../controller/studentLeaveController.js";

const studentLeaveRouter = express.Router();

studentLeaveRouter.get('/', studentLeaveController.getStudentLeave);
studentLeaveRouter.post("/add", studentLeaveController.createStudentLeave);
studentLeaveRouter.delete("/delete/:id", studentLeaveController.deleteStudentLeave);
studentLeaveRouter.put("/update/:id", studentLeaveController.updateStudentLeave);
studentLeaveRouter.get("/:id", studentLeaveController.getStudentLeaveById);

export default studentLeaveRouter;