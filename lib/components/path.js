'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$APPLY_MATRIX = _ref.APPLY_MATRIX,
      APPLY_MATRIX = _ref$APPLY_MATRIX === undefined ? true : _ref$APPLY_MATRIX,
      CLOSED = _ref.CLOSED,
      FILL_COLOR = _ref.FILL_COLOR,
      SEGMENTS = _ref.SEGMENTS,
      STROKE_CAP = _ref.STROKE_CAP,
      STROKE_COLOR = _ref.STROKE_COLOR,
      STROKE_WIDTH = _ref.STROKE_WIDTH;

  var ob = {
    applyMatrix: APPLY_MATRIX,
    closed: CLOSED,
    fillColor: FILL_COLOR,
    segments: SEGMENTS,
    strokeCap: STROKE_CAP,
    strokeColor: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH
  };
  var toReturn = Object.keys(ob).filter(function (key) {
    return ob[key];
  }).reduce(function (obj, key) {
    obj[key] = ob[key];
    return obj;
  }, {});
  return {
    PATH: ['Path', toReturn]
  };
};

var spec = {
  name: 'Create Path',
  description: 'creates a path',
  implementation: implementation,
  inputs: {
    APPLY_MATRIX: {},
    CLOSED: {},
    FILL_COLOR: {},
    SEGMENTS: {},
    STROKE_CAP: {},
    STROKE_COLOR: {},
    STROKE_WIDTH: {}
  },
  outputs: {
    PATH: {}
  }
};

exports.default = spec;