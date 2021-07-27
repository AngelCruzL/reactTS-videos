import axios from 'axios';

import { Video } from './Video.interface';

const API = 'http://localhost:5000';

export const getVideos = async () => {
  return await axios.get(`${API}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};
