'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exportSVG = require('./components/exportSVG');

Object.defineProperty(exports, 'exportSVG', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_exportSVG).default;
  }
});

var _fill = require('./components/fill');

Object.defineProperty(exports, 'fill', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fill).default;
  }
});

var _point = require('./components/point');

Object.defineProperty(exports, 'point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _rectangle = require('./components/rectangle');

Object.defineProperty(exports, 'rectangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rectangle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }