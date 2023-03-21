"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash.pickby");

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ArticleList = require("../components/ArticleList");

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _SearchBar = require("../components/SearchBar");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Timestamp = require("../components/Timestamp");

var _Timestamp2 = _interopRequireDefault(_Timestamp);

var _StateApi = require("../StateApi");

var _StateApi2 = _interopRequireDefault(_StateApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.appState = () => {
      const { articles, searchTerm } = this.props.store.getState();
      return { articles, searchTerm };
    }, this.state = this.appState(), this.onStoreChange = () => {
      this.setState(this.appState);
    }, _temp;
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, "i");
    if (searchTerm) {
      articles = (0, _lodash2.default)(articles, value => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_Timestamp2.default, null),
      _react2.default.createElement(_SearchBar2.default, null),
      _react2.default.createElement(_ArticleList2.default, { articles: articles })
    );
  }
}

App.childContextTypes = {
  store: _propTypes2.default.object
};
exports.default = App;


if (typeof window !== 'undefined') {
  const store = new _StateApi2.default(window.initialData);
  _reactDom2.default.render(_react2.default.createElement(App, { store: store }), document.getElementById("root"));
}