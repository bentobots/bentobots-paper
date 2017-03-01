'use strict';

var _paper = require('paper');

var _point = require('./point');

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('creates a point with values', function () {
  var result = (0, _point2.default)({ X: 2, Y: 3 });
  expect(result).toEqual({ POINT: new _paper.Point(2, 3) });
  // expect(result).toEqual({POINT: ["Point", 2, 3]})
});