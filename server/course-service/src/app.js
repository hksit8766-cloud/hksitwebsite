import express from "express";
import cors from "cors";

import courseRoutes from "./routes/courseRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "course-service",
        message: "Course Service is running",
    });
});

app.use("/courses", courseRoutes);

export default app;