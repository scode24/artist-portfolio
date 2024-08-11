import express from "express";
import { getArtistInfo, getArtWorks } from "../controllers/appController.js";
const router = express.Router();

// API endpoints
router.get("/getArtistInfo", getArtistInfo);
router.get("/getArtWorks", getArtWorks);

export default router;
