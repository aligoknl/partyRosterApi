import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    item: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Participant", ParticipantSchema);
