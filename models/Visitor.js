import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model("Visitor", VisitorSchema);
