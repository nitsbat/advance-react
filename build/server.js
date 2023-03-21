'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _serverRender = require('./renderers/serverRender.js');

var _serverRender2 = _interopRequireDefault(_serverRender);

var _testdata = require('../lib/testdata.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await (0, _serverRender2.default)();
  res.render('index', _extends({}, initialContent));
});

app.get('/data', (req, res) => {
  res.send(_testdata.data);
});

app.listen(_config2.default.port, function listenHandler() {
  console.info(`Running on ${_config2.default.port}...`);
});