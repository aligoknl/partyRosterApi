import Visitor from "../models/Visitor.js";

export const countVisitors = async (req, res, next) => {
  try {
    let visitor = await Visitor.findOne();

    // If no visitor record exists, create one
    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count += 1;
    }

    await visitor.save();

    console.log(`Visitor count: ${visitor.count}`);
    next();
  } catch (error) {
    console.error("Error updating visitor count:", error.message);
    next();
  }
};
