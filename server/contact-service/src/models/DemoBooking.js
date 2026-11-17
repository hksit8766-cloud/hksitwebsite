import mongoose from "mongoose";

const demoBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      match: [
        /^[0-9]{10}$/,
        "Phone number must contain exactly 10 digits.",
      ],
    },

    course: {
      type: String,
      required: [true, "Course is required."],
      enum: [
        "MERN Stack Development",
        ".NET Full Stack Development",
        "Java Full Stack Development",
        "React Development",
        "Node.js Backend Development",
        "DevOps Fundamentals",
        "Not Sure - Need Guidance",
      ],
    },

    experience: {
      type: String,
      required: [true, "Experience level is required."],
      enum: [
        "student",
        "fresher",
        "0-1",
        "1-3",
        "3-5",
        "5+",
        "career-switch",
      ],
    },

    preferredDate: {
      type: Date,
      required: [true, "Preferred date is required."],
    },

    preferredTime: {
      type: String,
      required: [true, "Preferred time is required."],
      enum: [
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
      ],
    },

    learningMode: {
      type: String,
      required: [true, "Learning mode is required."],
      enum: ["online", "classroom"],
    },

    message: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const DemoBooking = mongoose.model(
  "DemoBooking",
  demoBookingSchema
);

export default DemoBooking;