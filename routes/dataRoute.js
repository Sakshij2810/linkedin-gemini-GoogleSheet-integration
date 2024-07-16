import express from "express";
import { getAllData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getAllData);

export default router;
