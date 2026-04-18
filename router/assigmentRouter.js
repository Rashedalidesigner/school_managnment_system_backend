import express from "express";

import assigmentController from "../controller/AssigmentCoontroller.js";

const assigmentRouter = express.Router();

assigmentRouter.get('/', assigmentController.getAssignment);
assigmentRouter.post("/add", assigmentController.createassignment);
assigmentRouter.delete("/delete/:id", assigmentController.deleteassignment);
assigmentRouter.put("/update/:id", assigmentController.updateassignment);
assigmentRouter.get("/:id", assigmentController.getassignmentById);

export default assigmentRouter;