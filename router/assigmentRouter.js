import express from "express";

import assigmentController from "../controller/AssigmentCoontroller.js";

const assigmentRouter = express.Router();

assigmentRouter.get('/get', assigmentController.getAssignment);
assigmentRouter.post("/create", assigmentController.createassignment);
assigmentRouter.delete("/delete/:id", assigmentController.deleteassignment);
assigmentRouter.put("/update/:id", assigmentController.updateassignment);
assigmentRouter.get("/get/:id", assigmentController.getassignmentById);

export default assigmentRouter;