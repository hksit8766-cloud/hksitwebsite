import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        duration: {
            type: String,
            required: true,
        },

        level: {
            type: String,
            default: "Beginner",
        },

        technologies: [
            {
                type: String,
            },
        ],

        icon: {
            type: String,
            default: "💻",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;