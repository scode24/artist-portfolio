import ArtistInfoModel from "../models/ArtistInfo.model.js";
import ArtWorkInfoModel from "../models/ArtworkInfo.model.js";

const getArtistInfoFromService = async (req, res) => {
  try {
    return await ArtistInfoModel.findOne();
  } catch (err) {
    throw new Error("Error fetching artist info");
  }
};

const getArtWorkInfoFromService = async (req, res) => {
  try {
    return await ArtWorkInfoModel.find();
  } catch (err) {
    throw new Error("Error fetching artwork info");
  }
};

export { getArtWorkInfoFromService, getArtistInfoFromService };
