import {
  getArtistInfoFromService,
  getArtWorkInfoFromService,
} from "../services/appService.js";

const getArtistInfo = async (req, res) => {
  const response = await getArtistInfoFromService(req, res);
  res.send(response);
};

const getArtWorks = async (req, res) => {
  const response = await getArtWorkInfoFromService(req, res);
  res.send(response);
};

export { getArtistInfo, getArtWorks };
