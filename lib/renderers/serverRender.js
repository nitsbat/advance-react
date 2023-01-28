/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './dom';

const serverRender = () => {
  return ReactDOMServer.renderToString(
        <App />
    );
};


export default serverRender;