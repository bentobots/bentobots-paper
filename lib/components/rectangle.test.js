'use strict';

var _rectangle = require('./rectangle');

var _rectangle2 = _interopRequireDefault(_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('creates a rectangle with values', function () {
  var result = (0, _rectangle2.default)({ X: 2, Y: 3 });
  expect(result).toEqual({ RECTANGLE: '["Path",{"applyMatrix":true,"segments":[[2,4],[2,3],[3,3],[3,4]],"closed":true}]' });
});