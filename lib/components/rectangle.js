'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rectangle = function rectangle() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$X = _ref.X,
      X = _ref$X === undefined ? 0 : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? 0 : _ref$Y,
      _ref$WIDTH = _ref.WIDTH,
      WIDTH = _ref$WIDTH === undefined ? 1 : _ref$WIDTH,
      _ref$HEIGHT = _ref.HEIGHT,
      HEIGHT = _ref$HEIGHT === undefined ? 1 : _ref$HEIGHT;

  _paper2.default.setup();
  var rect = new _paper2.default.Path.Rectangle(X, Y, WIDTH, HEIGHT);
  return { RECTANGLE: rect.exportJSON() };
};

exports.default = rectangle;