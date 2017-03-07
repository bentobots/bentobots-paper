'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      CANVAS_ID = _ref.CANVAS_ID,
      PATHS = _ref.PATHS;

  var canvas = document.getElementById(CANVAS_ID);
  _paper2.default.setup(canvas);
  var path = new _paper2.default.Path();
  path.importJSON(PATHS);
  // paper.view.draw()
};

var spec = {
  name: 'Draw to canvas',
  description: 'draws to canvas',
  implementation: implementation,
  inputs: {
    ELEMENT: {}
  },
  outputs: {}
};

exports.default = spec;