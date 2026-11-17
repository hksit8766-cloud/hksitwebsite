import express from "express";
import cors from "cors";

import trainerRoutes from "./routes/trainerRoutes.js";

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use(express.json());


// ================= HEALTH =================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "trainer-service",
    message: "Trainer Service is running",
  });
});


// ================= TRAINERS =================

app.use(
  "/trainers",
  trainerRoutes
);


// ================= 404 =================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Trainer Service route not found.",
  });
});


export default app;