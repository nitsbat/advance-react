"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storeProvider = require("./storeProvider");

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timestamp extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.timeDisplay = timeStamp => timeStamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), _temp;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp);
  }

  render() {
    return _react2.default.createElement(
      "div",
      null,
      this.timeDisplay(this.props.timestamp)
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

exports.default = (0, _storeProvider2.default)(extraProps)(Timestamp);