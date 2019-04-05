"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoStyle = exports.containerStyle = exports.headerStyle = exports.subtitleStyle = exports.titleStyle = void 0;
var titleStyle = {
  fontSize: '5rem',
  lineHeight: '1.5'
};
exports.titleStyle = titleStyle;
var subtitleStyle = {
  fontSize: '2rem',
  lineHeight: '1.5'
};
exports.subtitleStyle = subtitleStyle;
var headerStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover'
};
exports.headerStyle = headerStyle;
var containerStyle = {
  width: '100%',
  position: 'relative',
  zIndex: 2
};
exports.containerStyle = containerStyle;
var videoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 1,
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)'
};
exports.videoStyle = videoStyle;