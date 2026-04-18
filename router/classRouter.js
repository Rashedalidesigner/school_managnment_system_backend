import express from "express";

import classController from "../controller/classController.js";

const classRouter = express.Router();

classRouter.get('/', classController.getclass);
classRouter.post("/add", classController.createclass);
classRouter.delete("/delete/:id", classController.deleteclass);
classRouter.put("/update/:id", classController.updateclass);
classRouter.get("/:id", classController.getclassById);

export default classRouter;