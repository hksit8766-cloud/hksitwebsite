import express from "express";

import {
  createDemoBooking,
  getDemoBookings,
  getDemoBookingById,
  updateDemoStatus,
} from "../controllers/demoController.js";


const router = express.Router();


// Public
router.post("/", createDemoBooking);


// Admin - protect later with JWT
router.get("/", getDemoBookings);

router.get("/:id", getDemoBookingById);

router.patch(
  "/:id/status",
  updateDemoStatus
);


export default router;