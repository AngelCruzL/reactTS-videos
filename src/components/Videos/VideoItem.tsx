import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import { Video } from './Video.interface';

import './VideoItem.css';

interface Props {
  video: Video;
}

function VideoItem({ video }: Props) {
  const history = useHistory();

  return (
    <div className="col-md-4">
      <div
        className="card card-body video-card"
        onClick={() => history.push(`/update/${video._id}`)}
      >
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
