import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Video } from './Video.interface';
import * as VideoService from './VideoService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const initialState = {
    description: '',
    title: '',
    url: '',
  };

  const history = useHistory();

  const [video, setVideo] = useState<Video>(initialState);

  const onHandleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await VideoService.createVideo(video);
    toast.success('New video added');
    setVideo(initialState);
    history.push('/');
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Write a title for this video"
                autoFocus
                className="form-control mb-3"
                onChange={onHandleInputChange}
                value={video.title}
              />

              <input
                type="text"
                name="url"
                placeholder="http://www.youtube.com"
                className="form-control mb-3"
                onChange={onHandleInputChange}
                value={video.url}
              />

              <textarea
                name="description"
                rows={3}
                placeholder="Write a description"
                className="form-control mb-3"
                onChange={onHandleInputChange}
                value={video.description}
              ></textarea>

              <button className="btn btn-primary">Create Favorite</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
