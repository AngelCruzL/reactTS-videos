import React, { useEffect, useState } from 'react';

import { Video } from './Video.interface';
import VideoItem from './VideoItem';
import * as VideoService from './VideoService';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await VideoService.getVideos();

    const formattedVideos = res.data
      .map(video => ({
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
      }))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formattedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map(video => (
        <VideoItem video={video} key={video._id} />
      ))}
    </div>
  );
};

export default VideoList;
