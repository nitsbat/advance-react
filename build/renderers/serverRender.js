'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _StateApi = require('../StateApi');

var _StateApi2 = _interopRequireDefault(_StateApi);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */
const serverRender = async () => {
  const rawData = await _axios2.default.get(`http://${_config2.default.host}:${_config2.default.port}/data`);
  const store = new _StateApi2.default(rawData.data);

  return {
    initialMarkUp: _server2.default.renderToString(_react2.default.createElement(_dom2.default, { store: store })),
    initialData: rawData.data
  };
};

exports.default = serverRender;