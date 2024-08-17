import {
  findUserByEmailService,
  getArtistInfoService,
  getArtWorkInfoService,
  getFeedbackByPhotoIdService,
  registerUserService,
  sendFeedbackService,
} from "../services/appService.js";

import jwt from "jsonwebtoken";

const getArtistInfo = async (req, res, next) => {
  try {
    res.status(200).json(await getArtistInfoService());
  } catch (err) {
    next(err);
  }
};

const getArtWorks = async (req, res, next) => {
  try {
    res.status(200).json(await getArtWorkInfoService());
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await findUserByEmailService(req.body.email);
    if (!user || user.password !== req.body.password) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      status: "OK",
      message: "User logged in successfully",
      loggedInUser: { name: user.name, email: user.email },
      jwtToken: token,
    });
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const existingUser = await findUserByEmailService(req.body.email);
    if (existingUser) {
      throw new Error("Email already registered");
    }

    await registerUserService(req);
    res.status(201).json({
      status: "OK",
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

const sendFeedback = async (req, res, next) => {
  try {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          throw new Error("Invalid access. Try logging in again.");
        }
        req.body.fromUserId = decoded.id;
      }
    );

    await sendFeedbackService(req);
    res.status(201).json({
      status: "OK",
      message: "Feedback sent successfully",
    });
  } catch (err) {
    next(err);
  }
};

const getFeedbackByPhotoId = async (req, res, next) => {
  try {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (decoded) {
          req.body.fromUserId = decoded.id;
        }
      }
    );

    res.status(200).json(await getFeedbackByPhotoIdService(req));
  } catch (err) {
    next(err);
  }
};

export {
  getArtistInfo,
  getArtWorks,
  getFeedbackByPhotoId,
  loginUser,
  registerUser,
  sendFeedback,
};
