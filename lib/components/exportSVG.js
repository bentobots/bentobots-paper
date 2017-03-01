'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _exportSVG = function _exportSVG() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      PATH = _ref.PATH;

  _paper2.default.setup();
  var path = new _paper2.default.Path();
  path.importJSON(PATH);

  var svg = path.exportSVG({ asString: false, bounds: null }).getAttribute('d');
  return { SVG: svg };
};

exports.default = _exportSVG;