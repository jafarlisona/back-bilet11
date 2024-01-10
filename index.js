import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { ServicesRouter } from "./src/router/ServicesRoute.js";

const app = express();
const port = process.env.PORT;
const key = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());
app.use("/services",ServicesRouter)

mongoose
  .connect(key)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
