import ArtistInfoModel from "../models/ArtistInfo.model.js";
import ArtWorkInfoModel from "../models/ArtworkInfo.model.js";
import UserInfoModel from "../models/UserInfo.model.js";

const getArtistInfoFromService = async () => {
  return await ArtistInfoModel.findOne();
};

const getArtWorkInfoFromService = async () => {
  return await ArtWorkInfoModel.find();
};

const findUserByEmail = async (email) => {
  return await UserInfoModel.findOne({ email });
};

const registerUserFromService = async (req) => {
  const newUser = new UserInfoModel(req.body);
  await newUser.save();
};

export {
  findUserByEmail,
  getArtWorkInfoFromService,
  getArtistInfoFromService,
  registerUserFromService,
};
