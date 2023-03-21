"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash.debounce");

var _lodash2 = _interopRequireDefault(_lodash);

var _storeProvider = require("./storeProvider");

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchBar extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      searchTerm: ""
    }, this.doSearch = (0, _lodash2.default)(() => {
      this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300), this.handleSearch = event => {
      this.setState({ searchTerm: event.target.value }, () => {
        this.doSearch();
      });
    }, _temp;
  }

  // This is regarding the component performance. we can alter the below methods to save unnecessary rendering the same we can do making it a pure component.
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('component update');
  // }

  render() {
    return _react2.default.createElement("input", {
      type: "search",
      placeholder: "Enter Search Term",
      value: this.state.searchTerm,
      onChange: this.handleSearch
    });
  }
}

exports.default = (0, _storeProvider2.default)()(SearchBar);