'use strict';

var _fill = require('./fill');

var _fill2 = _interopRequireDefault(_fill);

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('fills a path with a color', function () {
  var origPath = _path2.default.implementation();
  var fillResult = _fill2.default.implementation({ PATH: origPath.PATH, COLOR: 'red' });
  var expectedFillResult = { OUT: ['Path', { applyMatrix: true, fillColor: 'red' }] };
  expect(fillResult).toEqual(expectedFillResult);
  var anotherFillResult = _fill2.default.implementation({ PATH: fillResult.OUT, COLOR: 'green' });
  expect(anotherFillResult).toEqual({ OUT: ['Path', { applyMatrix: true, fillColor: 'green' }] });
});