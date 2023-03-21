"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Article = require("./Article");

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */
class ArticleList extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      "div",
      null,
      Object.values(this.props.articles).map(article => _react2.default.createElement(_Article2.default, { key: article.id, article: article }))
    );
  }
}

exports.default = ArticleList;