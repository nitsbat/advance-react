/* eslint-disable linebreak-style */
import axios from 'axios';
import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import config from '../config';
import StateApi from '../StateApi';
import App from './dom';

const serverRender = async () => {
  const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(rawData.data);

  return {
    initialMarkUp: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData : rawData.data,
  };
};

export default serverRender;