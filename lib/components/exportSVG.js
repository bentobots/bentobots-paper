'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      PATH = _ref.PATH,
      _ref$ONLYPATH = _ref.ONLYPATH,
      ONLYPATH = _ref$ONLYPATH === undefined ? true : _ref$ONLYPATH;

  _paper2.default.setup();

  // var project = new paper.Project()
  // project.activeLayer.transform( new paper.Matrix(1,0,0,-1,200,150))

  var path = new _paper2.default.Path();
  path.importJSON(PATH);

  var svg = void 0;
  if (ONLYPATH) {
    // const svg = path.exportSVG({ asString: false, bounds: null }).getAttribute('d')
    svg = path.getPathData();
  } else {
    svg = path.exportSVG({ asString: true, bounds: null });
  }

  return { SVG: svg };
};

var spec = {
  name: 'Export SVG',
  description: 'exports an svg',
  implementation: implementation,
  inputs: {
    PATH: {},
    ONLYPATH: {}
  },
  outputs: {
    SVG: {}
  }
};

exports.default = spec;