import express from "express";
import cors from "cors";

import enquiryRoutes from "./routes/contactRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";


const app = express();


// =====================================================
// CORS
// =====================================================

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


// =====================================================
// BODY PARSER
// =====================================================

app.use(express.json());


// =====================================================
// HEALTH
// =====================================================

app.get("/health", (req, res) => {

  res.status(200).json({
    success: true,
    service: "enquiry-service",
    message:
      "Enquiry Service is running",
  });

});


// =====================================================
// CONTACT ENQUIRIES
// =====================================================

app.use(
  "/enquiries",
  enquiryRoutes
);


// =====================================================
// DEMO BOOKINGS
// =====================================================

app.use(
  "/demos",
  demoRoutes
);


// =====================================================
// 404
// =====================================================

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message:
      "Enquiry Service route not found.",
  });

});


export default app;