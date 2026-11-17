import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
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

        subject: {
            type: String,
            required: [true, "Subject is required."],
            enum: [
                "course",
                "demo",
                "fees",
                "batch",
                "career",
                "other",
            ],
        },

        message: {
            type: String,
            required: [true, "Message is required."],
            trim: true,
            maxlength: 2000,
        },

        status: {
            type: String,
            enum: [
                "new",
                "contacted",
                "resolved",
            ],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const Enquiry = mongoose.model(
    "Enquiry",
    enquirySchema
);

export default Enquiry;