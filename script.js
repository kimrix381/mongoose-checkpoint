import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

// Connect to MongoDB

mongoose.connect("mongodb://localhost/testdb", (err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
  } else {
    console.log("Connected to MongoDB");
  }
});
