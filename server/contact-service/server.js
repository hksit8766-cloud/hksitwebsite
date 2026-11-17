import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 5003;

const startServer = async () => {
  try {
    // Connect MongoDB
    await connectDB();

    // Start Enquiry Service
    app.listen(PORT, () => {
      console.log(
        `Enquiry Service running on port ${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "Failed to start Enquiry Service:",
      error.message
    );

    process.exit(1);
  }
};

startServer();