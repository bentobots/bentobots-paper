'use strict';

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can create a path', function () {
  var result = _path2.default.implementation();
  expect(result).toEqual({ PATH: ['Path', { applyMatrix: true }] });
});

it('can create a path with a fill color', function () {
  var result = _path2.default.implementation({ FILL_COLOR: 'green' });
  expect(result).toEqual({ PATH: ['Path', { applyMatrix: true, fillColor: 'green' }] });
});

it('ignores keys not on whitelist', function () {
  var result = _path2.default.implementation({ HELLO: 'World' });
  expect(result.PATH.HELLO).toEqual(undefined);
});