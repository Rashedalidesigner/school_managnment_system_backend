import express from "express";

import teacherController from "../controller/TeacherController.js";

const teacherRouter = express.Router();

teacherRouter.get('/', teacherController.getteacher);
teacherRouter.post("/add", teacherController.createteacher);
teacherRouter.delete("/delete/:id", teacherController.deleteteacher);
teacherRouter.put("/update/:id", teacherController.updateteacher);
teacherRouter.get("/:id", teacherController.getteacherById);

export default teacherRouter;