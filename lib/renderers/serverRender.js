/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from '../config';
import App from './dom';
import DataApi from '../DataApi';

const serverRender = async () => {
  const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(rawData.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  );
};


export default serverRender;