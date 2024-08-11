import mongoose from "mongoose";

const ArtWorkSchema = new mongoose.Schema({
  photoPath: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  artDescription: {
    materialUsed: {
      type: String,
      required: true,
    },
    paperType: {
      type: String,
      required: true,
    },
    dimension: {
      type: String,
      required: true,
    },
  },
  layout: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const ArtWorkInfoModel = mongoose.model(
  "artWorkInfo",
  ArtWorkSchema,
  "artwork-info"
);

export default ArtWorkInfoModel;
