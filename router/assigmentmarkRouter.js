import express from "express";

import assigmentMarkController from "../controller/asigmentmarkController.js";

const assigmentMarkRouter = express.Router();

assigmentMarkRouter.get('/get', assigmentMarkController.getAssignmentmark);
assigmentMarkRouter.post("/create", assigmentMarkController.createassignmentmark);
assigmentMarkRouter.delete("/delete/:id", assigmentMarkController.deleteassignmentmark);
assigmentMarkRouter.put("/update/:id", assigmentMarkController.updateassignmentmark);
assigmentMarkRouter.get("/get/:id", assigmentMarkController.getassignmentmarkById);

export default assigmentMarkRouter;