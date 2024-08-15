import express from "express";
import {
  getArtistInfo,
  getArtWorks,
  loginUser,
  registerUser,
} from "../controllers/appController.js";
const router = express.Router();

// API endpoints
router.get("/getArtistInfo", getArtistInfo);
router.get("/getArtWorks", getArtWorks);
router.post("/loginUser", loginUser);
router.post("/registerUser", registerUser);

export default router;
