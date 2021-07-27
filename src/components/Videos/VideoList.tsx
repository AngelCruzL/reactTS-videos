import React, { useEffect, useState } from 'react';

import { Video } from './Video.interface';
import VideoItem from './VideoItem';
import * as VideoService from './VideoService';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await VideoService.getVideos();
    setVideos(res.data);
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
