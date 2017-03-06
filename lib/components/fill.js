'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      PATH = _ref.PATH,
      COLOR = _ref.COLOR;

  console.log(PATH);
  var ob = Object.assign({}, PATH[1], { 'fillColor': COLOR });
  return { OUT: [PATH[0], ob] };
};

var spec = {
  name: 'Fill Path',
  description: 'fills a path',
  implementation: implementation,
  inputs: {
    PATH: {},
    COLOR: {}
  },
  outputs: {
    OUT: {}
  }
};

exports.default = spec;