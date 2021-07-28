import React from 'react';
import ReactPlayer from 'react-player';

import { Video } from './Video.interface';

interface Props {
  video: Video;
}

function VideoItem({ video }: Props) {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h2>{video.title}</h2>
          <span className="text-danger">X</span>
        </div>
        <p>{video.description}</p>
        <div className="ratio ratio-16x9">
          <ReactPlayer url={video.url} width="100%" height="100%" controls />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
