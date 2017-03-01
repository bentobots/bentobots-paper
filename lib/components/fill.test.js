'use strict';

var _rectangle = require('./rectangle');

var _rectangle2 = _interopRequireDefault(_rectangle);

var _fill = require('./fill');

var _fill2 = _interopRequireDefault(_fill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('fills a path with a color', function () {
  var rect = (0, _rectangle2.default)({ X: 2, Y: 3 }).RECTANGLE;
  var result = (0, _fill2.default)({ PATH: rect, COLOR: 'red' });
  expect(result).toEqual({ PATH: '["Path",{"applyMatrix":true,"segments":[[2,4],[2,3],[3,3],[3,4]],"closed":true,"fillColor":[1,0,0]}]' });
});