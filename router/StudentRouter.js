import express from "express";
import StudentController from "../controller/StudentController.js";

const Studentrouter = express.Router();

Studentrouter.get("/", StudentController.getStudent);
Studentrouter.post("/add", StudentController.createStudent);
Studentrouter.put("/update/:id", StudentController.updateStudent);
Studentrouter.delete("/delete/:id", StudentController.deleteStudent);
Studentrouter.get("/:id", StudentController.getStudentById);


export default Studentrouter;
