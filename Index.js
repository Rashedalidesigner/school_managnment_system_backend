import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./connection/connection.js";
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


const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use("/api/students", Studentrouter);
app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/assignments", assigmentRouter);
app.use("/api/classes", classRouter);
app.use("/api/assignmentMarks", assigmentMarkRouter);
app.use("/api/studentAttendence", studentAttendenceRouter);
app.use("/api/studentLeave", studentLeaveRouter);
app.use("/api/teacherattendence", teacherAttendenceRouter);
app.use("/api/teacherLeave", teacherLeaveRouter);


// import ClassSchema from "./model/ClassSchama.js";

// connectDB().then(async () => {
//     await ClassSchema.collection.dropIndex("classId_1");
//     console.log("Dropped unique index on StudentId");
//     // process.exit();
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

