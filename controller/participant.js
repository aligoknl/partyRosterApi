import Participant from "../models/Participant.js";

// GET: Fetch all participants
export const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    const reversedParticipants = participants.reverse();
    res.status(200).json(reversedParticipants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch participants" });
  }
};

// POST: Create a new participant
export const createParticipant = async (req, res) => {
  try {
    const { name, item } = req.body;
    if (!name || !item) {
      return res.status(400).json({ error: "Name and item are required" });
    }
    const newParticipant = new Participant({ name, item });
    await newParticipant.save();
    res.status(201).json(newParticipant);
  } catch (error) {
    res.status(500).json({ error: "Failed to create participant" });
  }
};

// PUT: Update a participant by ID
export const updateParticipant = async (req, res) => {
  try {
    const { name, item } = req.body;
    if (!name || !item) {
      return res.status(400).json({ error: "Name and item are required" });
    }
    const updatedParticipant = await Participant.findByIdAndUpdate(
      req.params.id,
      { name, item },
      { new: true }
    );
    if (!updatedParticipant) {
      return res.status(404).json({ error: "Participant not found" });
    }
    res.status(200).json(updatedParticipant);
  } catch (error) {
    res.status(500).json({ error: "Failed to update participant" });
  }
};

// DELETE: Delete a participant by ID
export const deleteParticipant = async (req, res) => {
  try {
    const deletedParticipant = await Participant.findByIdAndDelete(
      req.params.id
    );
    if (!deletedParticipant) {
      return res.status(404).json({ error: "Participant not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete participant" });
  }
};
