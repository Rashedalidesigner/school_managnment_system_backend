import express from "express";
import StudentController from "../controller/StudentController.js";

const Studentrouter = express.Router();

Studentrouter.get("/get", StudentController.getStudent);
Studentrouter.post("/create", StudentController.createStudent);
Studentrouter.put("/update/:id", StudentController.updateStudent);
Studentrouter.delete("/delete/:id", StudentController.deleteStudent);
Studentrouter.get("/get/:id", StudentController.getStudentById);


export default Studentrouter;
