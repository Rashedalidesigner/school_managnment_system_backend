import express from "express";

import StudentAttendenceController from "../controller/studentattendence.js";

const studentAttendenceRouter = express.Router();

studentAttendenceRouter.get('/', StudentAttendenceController.getStudentAttendence);
studentAttendenceRouter.post("/add", StudentAttendenceController.createStudentAttendence);
studentAttendenceRouter.delete("/delete/:id", StudentAttendenceController.deleteStudentAttendence);
studentAttendenceRouter.put("/update/:id", StudentAttendenceController.updateStudentAttendence);
studentAttendenceRouter.get("/:id", StudentAttendenceController.getStudentAttendenceById);

export default studentAttendenceRouter;