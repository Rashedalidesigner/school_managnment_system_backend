import mongoose from "mongoose";

const feeSchama = new mongoose.Schema({
    studentId: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    pamentmethod: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        default: '0',
    },
    stutus: {
        type: String,
        default: "panding"
    }
})

const FeeModel = mongoose.model("fee", feeSchama);

export default FeeModel;