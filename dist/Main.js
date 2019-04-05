"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FullHeader = function FullHeader(_ref) {
  var title = _ref.title;

  var component = _react["default"].createElement("header", null, title && _react["default"].createElement("h1", null, title));

  return component;
};

var propTypes = {
  title: _propTypes["default"].string
};
FullHeader.propTypes = propTypes;
var _default = FullHeader;
exports["default"] = _default;