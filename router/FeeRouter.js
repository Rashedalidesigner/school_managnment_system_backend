import express from "express";

import Fee from "../controller/Fee.js";


const FeeRouter = express.Router();

FeeRouter.get('/', Fee.getFee);
FeeRouter.post("/add", Fee.createFee);
FeeRouter.delete("/delete/:id", Fee.deleteFee);
FeeRouter.put("/update/:id", Fee.updateFee);
FeeRouter.get("/:id", Fee.getFeeById);

export default FeeRouter;