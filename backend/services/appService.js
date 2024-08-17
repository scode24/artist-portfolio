import ArtistInfoModel from "../models/ArtistInfo.model.js";
import ArtWorkInfoModel from "../models/ArtworkInfo.model.js";
import FeedbackInfoModel from "../models/FeedbackInfo.model.js";
import UserInfoModel from "../models/UserInfo.model.js";

const getArtistInfoService = async () => {
  return await ArtistInfoModel.findOne();
};

const getArtWorkInfoService = async () => {
  return await ArtWorkInfoModel.find();
};

const findUserByEmailService = async (email) => {
  return await UserInfoModel.findOne({ email });
};

const registerUserService = async (req) => {
  const newUser = new UserInfoModel(req.body);
  await newUser.save();
};

const sendFeedbackService = async (req) => {
  const newFeedback = new FeedbackInfoModel(req.body);
  await newFeedback.save();
};

const getFeedbackByPhotoIdService = async (req) => {
  let feedbackInfoResult = [];
  const feedbackInfos = await FeedbackInfoModel.find({
    photoId: req.body.photoId,
  });

  if (feedbackInfos.length > 0) {
    for (const feedbackInfo of feedbackInfos) {
      const userInfo = await getUserInfo(feedbackInfo.fromUserId);
      feedbackInfoResult.push({
        senderName: userInfo.name,
        senderEmail: userInfo.email,
        message: feedbackInfo.feedback,
        align:
          req.body?.fromUserId === feedbackInfo.fromUserId.toString()
            ? "left"
            : "right",
      });
    }
  }

  return feedbackInfoResult;
};

const getUserInfo = async (userId) => {
  return await UserInfoModel.findOne({ _id: userId });
};

export {
  findUserByEmailService,
  getArtWorkInfoService,
  getArtistInfoService,
  getFeedbackByPhotoIdService,
  registerUserService,
  sendFeedbackService,
};
