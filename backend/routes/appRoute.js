import express from "express";
import {
  getArtistInfo,
  getArtWorks,
  getFeedbackByPhotoId,
  loginUser,
  registerUser,
  sendFeedback,
} from "../controllers/appController.js";
const router = express.Router();

// API endpoints
router.get("/getArtistInfo", getArtistInfo);
router.get("/getArtWorks", getArtWorks);
router.post("/loginUser", loginUser);
router.post("/registerUser", registerUser);
router.post("/sendFeedback", sendFeedback);
router.post("/getFeedbackByPhotoId", getFeedbackByPhotoId);

export default router;
