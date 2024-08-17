import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true },
  about: { type: String, required: true },
  skills: { type: String, required: true },
  awards: [{ type: String }],
  socialNetworks: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  address: { type: String, required: true },
});

const ArtistInfoModel = mongoose.model(
  "artistInfo",
  artistSchema,
  "artist-info"
);

export default ArtistInfoModel;
