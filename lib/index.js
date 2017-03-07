'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drawToCanvas = require('./components/drawToCanvas');

Object.defineProperty(exports, 'drawToCanvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_drawToCanvas).default;
  }
});

var _fill = require('./components/fill');

Object.defineProperty(exports, 'fill', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fill).default;
  }
});

var _path = require('./components/path');

Object.defineProperty(exports, 'path', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_path).default;
  }
});

var _compoundPath = require('./components/compoundPath');

Object.defineProperty(exports, 'compoundPath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_compoundPath).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }