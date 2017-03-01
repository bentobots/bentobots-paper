'use strict';

var _rectangle = require('./rectangle');

var _rectangle2 = _interopRequireDefault(_rectangle);

var _exportSVG2 = require('./exportSVG');

var _exportSVG3 = _interopRequireDefault(_exportSVG2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can exportSVG', function () {
  var rect = (0, _rectangle2.default)({ X: 2, Y: 2, WIDTH: 20, HEIGHT: 50 }).RECTANGLE;
  var result = (0, _exportSVG3.default)({ PATH: rect });
  expect(result).toEqual({ SVG: 'M2,52l0,-50l20,0l0,50z' });
});