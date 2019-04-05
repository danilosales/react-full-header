"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: ''
};
exports.defaultProps = defaultProps;
var propTypes = {
  title: _propTypes["default"].string,
  subtitle: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  textColor: _propTypes["default"].string,
  font: _propTypes["default"].string,
  bgImg: _propTypes["default"].string,
  video: _propTypes["default"].string
};

var FullHeader = function FullHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      bgColor = _ref.bgColor,
      textColor = _ref.textColor,
      font = _ref.font,
      bgImg = _ref.bgImg,
      video = _ref.video;

  var headerStylesCombined = _objectSpread({}, _Styles.headerStyle, {
    backgroundColor: bgColor,
    backgroundImage: "url(".concat(bgImg, ")"),
    color: textColor,
    fontFamily: font
  });

  var component = _react["default"].createElement("header", {
    style: headerStylesCombined
  }, _react["default"].createElement("div", {
    style: _Styles.containerStyle
  }, title && _react["default"].createElement("h1", {
    style: _Styles.titleStyle
  }, title), subtitle && _react["default"].createElement("h2", {
    style: _Styles.subtitleStyle
  }, subtitle)), video && _react["default"].createElement("video", {
    src: video,
    autoPlay: true,
    muted: true,
    loop: true,
    style: _Styles.videoStyle
  }));

  return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;
var _default = FullHeader;
exports["default"] = _default;