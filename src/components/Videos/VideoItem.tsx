import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import { Video } from './Video.interface';
import * as videoService from './VideoService';

import './VideoItem.css';

interface Props {
  video: Video;
  loadVideos: () => void;
}

function VideoItem({ video, loadVideos }: Props) {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h2 onClick={() => history.push(`/update/${video._id}`)}>
            {video.title}
          </h2>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            X
          </span>
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
