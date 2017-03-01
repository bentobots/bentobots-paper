'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fill = function _fill() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      PATH = _ref.PATH,
      _ref$COLOR = _ref.COLOR,
      COLOR = _ref$COLOR === undefined ? 'black' : _ref$COLOR;

  _paper2.default.setup();
  var path = new _paper2.default.Path();
  path.importJSON(PATH);
  path.fillColor = COLOR;
  return { PATH: path.exportJSON() };
};

exports.default = _fill;