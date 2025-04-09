require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Connection error", err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
