import Counter from "../model/CountSchama.js";

export const getNextSequence = async (name) => {
    const counter = await Counter.findOneAndUpdate(
        { name: name },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    return counter.seq;
};