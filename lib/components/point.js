'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var point = function point() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$X = _ref.X,
      X = _ref$X === undefined ? 0 : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? 0 : _ref$Y;

  return { POINT: new _paper.Point(X, Y) };
};

exports.default = point;