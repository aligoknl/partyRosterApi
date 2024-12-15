import express from "express";
import {
  getParticipants,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} from "../controller/participant.js";

const router = express.Router();

router.get("/participants", getParticipants);
router.post("/participants", createParticipant);
router.put("/participants/:id", updateParticipant);
router.delete("/participants/:id", deleteParticipant);

export default router;
