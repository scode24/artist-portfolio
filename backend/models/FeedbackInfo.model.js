import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    photoId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Image",
    },
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    feedback: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const FeedbackInfoModel = mongoose.model(
  "feedbackInfo",
  feedbackSchema,
  "feedback-info"
);

export default FeedbackInfoModel;
