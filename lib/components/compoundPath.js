'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$CHILDREN = _ref.CHILDREN,
      CHILDREN = _ref$CHILDREN === undefined ? [] : _ref$CHILDREN,
      _ref$FILL_COLOR = _ref.FILL_COLOR,
      FILL_COLOR = _ref$FILL_COLOR === undefined ? 'black' : _ref$FILL_COLOR;

  var ob = {
    children: CHILDREN,
    fillColor: FILL_COLOR
  };
  var toReturn = {
    applyMatrix: true,
    children: CHILDREN,
    fillColor: FILL_COLOR
  };
  return {
    PATH: ['CompoundPath', toReturn]
  };
};

var spec = {
  name: 'Creates a compound path',
  description: 'joins paths together',
  implementation: implementation,
  inputs: {
    CHILDREN: {},
    FILL_COLOR: {}
  },
  outputs: {
    PATH: {}
  }
};

exports.default = spec;