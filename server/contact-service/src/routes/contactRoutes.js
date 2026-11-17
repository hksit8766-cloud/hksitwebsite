import express from "express";

import {
  createEnquiry,
  getEnquiries,
  getEnquiryById,
} from "../controllers/contactController.js";


const router = express.Router();


// Create enquiry
router.post("/", createEnquiry);


// Get all enquiries
router.get("/", getEnquiries);


// Get enquiry by ID
router.get("/:id", getEnquiryById);


export default router;