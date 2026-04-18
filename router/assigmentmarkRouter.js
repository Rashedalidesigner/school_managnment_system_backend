import express from "express";

import assigmentMarkController from "../controller/asigmentmarkController.js";

const assigmentMarkRouter = express.Router();

assigmentMarkRouter.get('/', assigmentMarkController.getAssignmentmark);
assigmentMarkRouter.post("/add", assigmentMarkController.createassignmentmark);
assigmentMarkRouter.delete("/delete/:id", assigmentMarkController.deleteassignmentmark);
assigmentMarkRouter.put("/update/:id", assigmentMarkController.updateassignmentmark);
assigmentMarkRouter.get("/:id", assigmentMarkController.getassignmentmarkById);

export default assigmentMarkRouter;