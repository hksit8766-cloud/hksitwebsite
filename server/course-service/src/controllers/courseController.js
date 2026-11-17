import Course from "../models/Course.js";

// GET ALL COURSES
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({
            isActive: true,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to get courses.",
            error: error.message,
        });
    }
};


// GET COURSE BY SLUG
export const getCourseBySlug = async (req, res) => {
    try {
        const course = await Course.findOne({
            slug: req.params.slug,
            isActive: true,
        });

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: course,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to get course.",
            error: error.message,
        });
    }
};


// CREATE COURSE
export const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);

        res.status(201).json({
            success: true,
            message: "Course created successfully.",
            data: course,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Unable to create course.",
            error: error.message,
        });
    }
};