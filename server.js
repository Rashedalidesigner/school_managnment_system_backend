import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import connectDB from "./connection/connection.js";
import Studentrouter from "./router/StudentRouter.js";
import userRouter from "./router/UserRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assigmentRouter from "./router/assigmentRouter.js";
import classRouter from "./router/classRouter.js";
import assigmentMarkRouter from "./router/assigmentmarkRouter.js";
import studentAttendenceRouter from "./router/studentattendenceRouter.js";
import studentLeaveRouter from "./router/studentLeaveRouter.js";
import teacherAttendenceRouter from "./router/teacherattendenceRouter.js";
import teacherLeaveRouter from "./router/teacherLeaveRouter.js";
import FeeRouter from "./router/FeeRouter.js";
import dotenv from "dotenv";
// import connection from "./connection/connected.js";
import { mongodbConnection } from "./config/MongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

app.use("/api/students", Studentrouter);
app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/assignments", assigmentRouter);
app.use("/api/classes", classRouter);
app.use("/api/assignmentmark", assigmentMarkRouter);
app.use("/api/studentAttendence", studentAttendenceRouter);
app.use("/api/studentLeave", studentLeaveRouter);
app.use("/api/teacherattendence", teacherAttendenceRouter);
app.use("/api/teacherLeave", teacherLeaveRouter);
app.use("/api/fee", FeeRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the School Management System API");
});

mongodbConnection();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});




