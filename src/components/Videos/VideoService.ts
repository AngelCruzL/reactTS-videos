import axios from 'axios';

import { Video } from './Video.interface';

const API = 'http://localhost:5000';

export const getVideos = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${API}/videos/${id}`, video);
};
