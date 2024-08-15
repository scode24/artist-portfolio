import {
  findUserByEmail,
  getArtistInfoFromService,
  getArtWorkInfoFromService,
  registerUserFromService,
} from "../services/appService.js";

const getArtistInfo = async (req, res, next) => {
  try {
    res.status(200).json(await getArtistInfoFromService());
  } catch (err) {
    next(err);
  }
};

const getArtWorks = async (req, res, next) => {
  try {
    res.status(200).json(await getArtWorkInfoFromService());
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (!user || user.password !== req.body.password) {
      throw new Error("Invalid email or password");
    }
    res.status(200).json({
      status: "OK",
      message: "User logged in successfully",
      loggedInUser: { name: user.name, email: user.email },
    });
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const existingUser = await findUserByEmail(req.body.email);
    if (existingUser) {
      throw new Error("Email already registered");
    }

    await registerUserFromService(req);
    res.status(201).json({
      status: "OK",
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

export { getArtistInfo, getArtWorks, loginUser, registerUser };
