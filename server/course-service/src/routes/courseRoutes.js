import express from "express";

import {
    getCourses,
    getCourseBySlug,
    createCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);

router.get("/:slug", getCourseBySlug);

router.post("/", createCourse);

export default router;