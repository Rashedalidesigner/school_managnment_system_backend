import express from "express";

import teacherAttendenceController from "../controller/teacherattendence.js";

const teacherAttendenceRouter = express.Router();

teacherAttendenceRouter.get('/get', teacherAttendenceController.getTeacherAttendence);
teacherAttendenceRouter.post("/create", teacherAttendenceController.createTeacherAttendence);
teacherAttendenceRouter.delete("/delete/:id", teacherAttendenceController.deleteTeacherAttendence);
teacherAttendenceRouter.put("/update/:id", teacherAttendenceController.updateTeacherAttendence);
teacherAttendenceRouter.get("/get/:id", teacherAttendenceController.getTeacherAttendenceById);

export default teacherAttendenceRouter;