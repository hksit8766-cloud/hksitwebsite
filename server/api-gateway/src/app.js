import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

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
// HEALTH CHECK
// =====================================================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "api-gateway",
    message: "HKS-IT API Gateway is running",
  });
});


// =====================================================
// DEBUG SERVICE URLS
// =====================================================

console.log(
  "Course Service URL:",
  process.env.COURSE_SERVICE_URL
);

console.log(
  "Contact Service URL:",
  process.env.CONTACT_SERVICE_URL
);

console.log(
  "Trainer Service URL:",
  process.env.TRAINER_SERVICE_URL
);


// =====================================================
// COURSE SERVICE
// =====================================================

app.use(
  "/api/courses",

  createProxyMiddleware({
    target: process.env.COURSE_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: (path) => {
      return `/courses${path}`;
    },

    on: {
      error: (err, req, res) => {
        console.error(
          "Course Service Proxy Error:",
          err.message
        );

        if (!res.headersSent) {
          res.status(503).json({
            success: false,
            message:
              "Course Service is currently unavailable.",
          });
        }
      },
    },
  })
);


// =====================================================
// CONTACT / ENQUIRY SERVICE
// =====================================================

app.use(
  "/api/enquiries",

  createProxyMiddleware({
    target: process.env.CONTACT_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: (path) => {
      return `/enquiries${path}`;
    },

    on: {
      proxyReq: (proxyReq, req) => {
        console.log(
          `Proxying ${req.method} request to Contact Service`
        );
      },

      error: (err, req, res) => {
        console.error(
          "Contact Service Proxy Error:",
          err.message
        );

        if (!res.headersSent) {
          res.status(503).json({
            success: false,
            message:
              "Contact Service is currently unavailable.",
          });
        }
      },
    },
  })
);


// =====================================================
// DEMO BOOKING SERVICE
// Same Enquiry Service :5003
// =====================================================

app.use(
  "/api/demos",

  createProxyMiddleware({
    target: process.env.CONTACT_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: (path) => {
      return `/demos${path}`;
    },

    on: {
      proxyReq: (proxyReq, req) => {
        console.log(
          `Proxying ${req.method} request to Demo Service`
        );
      },

      error: (err, req, res) => {
        console.error(
          "Demo Service Proxy Error:",
          err.message
        );

        if (!res.headersSent) {
          res.status(503).json({
            success: false,
            message:
              "Demo Booking Service is currently unavailable.",
          });
        }
      },
    },
  })
);


// =====================================================
// TRAINER SERVICE
// =====================================================

app.use(
  "/api/trainers",

  createProxyMiddleware({
    target: process.env.TRAINER_SERVICE_URL,
    changeOrigin: true,

    // Gateway:
    // GET /api/trainers
    //
    // Trainer Service:
    // GET /trainers

    pathRewrite: (path) => {
      return `/trainers${path}`;
    },

    on: {
      proxyReq: (proxyReq, req) => {
        console.log(
          `Proxying ${req.method} request to Trainer Service`
        );
      },

      error: (err, req, res) => {
        console.error(
          "Trainer Service Proxy Error:",
          err.message
        );

        if (!res.headersSent) {
          res.status(503).json({
            success: false,
            message:
              "Trainer Service is currently unavailable.",
          });
        }
      },
    },
  })
);


// =====================================================
// 404 - KEEP THIS AT THE END
// =====================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});


export default app;