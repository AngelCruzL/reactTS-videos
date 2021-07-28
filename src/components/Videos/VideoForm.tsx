import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Video } from './Video.interface';
import * as VideoService from './VideoService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const VideoForm = () => {
  const initialState = {
    description: '',
    title: '',
    url: '',
  };
  const history = useHistory();
  const params = useParams<Params>();

  const [video, setVideo] = useState<Video>(initialState);

  const onHandleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await VideoService.createVideo(video);
      toast.success('New video added');
      setVideo(initialState);
    } else {
      await VideoService.updateVideo(params.id, video);
      toast.success('Video Updated');
    }
    history.push('/');
  };

  const getVideo = async (id: string) => {
    const res = await VideoService.getVideo(id);
    const { description, title, url } = res.data;
    setVideo({ description, title, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {params.id ? <h3>Update Video</h3> : <h3>New Video</h3>}

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

              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create Favorite</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
