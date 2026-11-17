import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 5004;


const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Trainer Service running on port ${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "Failed to start Trainer Service:",
      error.message
    );

    process.exit(1);
  }
};


startServer();