import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';
import Navbar from './components/Navbar/Navbar';

import './index.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-5">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
          <Route path="/update/:id" component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
