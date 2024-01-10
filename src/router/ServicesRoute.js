import express from "express";
import {
  createServices,
  deleteServiceById,
  getAllServices,
  getServiceById,
} from "../controller/ServicesController.js";
import { myLogger } from "../middleware/Logger.js";
export const ServicesRouter = express.Router();

ServicesRouter.get("/", myLogger, getAllServices);
ServicesRouter.get("/:id", getServiceById);
ServicesRouter.post("/", createServices);
ServicesRouter.delete("/:id", deleteServiceById);
