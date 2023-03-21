"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storeProvider = (extraProps = () => {}) => Component => {
  var _class, _temp2;

  return _temp2 = _class = class extends _react2.default.PureComponent {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.onStoreChange = () => {
        if (this.subscriptionId) {
          this.forceUpdate();
        }
      }, _temp;
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return _react2.default.createElement(Component, _extends({}, this.props, extraProps(this.context.store, this.props), {
        store: this.context.store
      }));
    }
  }, _class.displayName = `${Component.name}Container`, _class.contextTypes = {
    store: _propTypes2.default.object
  }, _temp2;
};

exports.default = storeProvider;