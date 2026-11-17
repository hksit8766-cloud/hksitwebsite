import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Trainer name is required."],
      trim: true,
      maxlength: 100,
    },

    role: {
      type: String,
      required: [true, "Trainer role is required."],
      trim: true,
    },

    experience: {
      type: String,
      required: [true, "Experience is required."],
      trim: true,
    },

    initials: {
      type: String,
      required: [true, "Initials are required."],
      trim: true,
      uppercase: true,
      maxlength: 4,
    },

    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
      maxlength: 1000,
    },

    skills: {
      type: [String],
      required: true,
      default: [],
    },

    image: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Trainer = mongoose.model(
  "Trainer",
  trainerSchema
);

export default Trainer;