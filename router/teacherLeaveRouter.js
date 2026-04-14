import express from "express";

import teacherLeaveController from "../controller/TeacherLeaveController.js";

const teacherLeaveRouter = express.Router();

teacherLeaveRouter.get('/get', teacherLeaveController.getTeacherLeave);
teacherLeaveRouter.post("/create", teacherLeaveController.createTeacherLeave);
teacherLeaveRouter.delete("/delete/:id", teacherLeaveController.deleteTeacherLeave);
teacherLeaveRouter.put("/update/:id", teacherLeaveController.updateTeacherLeave);
teacherLeaveRouter.get("/get/:id", teacherLeaveController.getTeacherLeaveById);

export default teacherLeaveRouter;