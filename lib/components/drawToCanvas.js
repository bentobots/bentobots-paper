'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      PATHS = _ref.PATHS,
      _ref$UNITE = _ref.UNITE,
      UNITE = _ref$UNITE === undefined ? true : _ref$UNITE;

  return { PARSED_PATHS: PATHS };
  // var canvas = document.getElementById(CANVAS_ID)
  // paper.setup(canvas)
  // let path
  // if (PATHS[0] && Array.isArray(PATHS[0])) {
  //   PATHS.map(PATH => {
  //     path = new paper.Path()
  //     path.importJSON(PATH)
  //   })
  // } else {
  //   path = new paper.Path()
  //   path.importJSON(PATHS)
  // }
  // paper.view.draw()x
};

var UI = function (_React$Component) {
  _inherits(UI, _React$Component);

  function UI(props) {
    _classCallCheck(this, UI);

    var _this = _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).call(this, props));

    _this.canvasID = _this.props.id + '-canvas';
    return _this;
  }

  _createClass(UI, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      _paper2.default.setup(this.canvasID);
      // var project = new paper.Project()

      var path = void 0;
      var PATHS = this.props.outputs.PARSED_PATHS;
      if (PATHS[0] && Array.isArray(PATHS[0])) {
        PATHS.map(function (PATH) {
          // path = new paper.Path()
          path = new _paper2.default[PATH[0]]();
          project.importJSON(PATH);
        });
      } else {
        // path = new paper.Path()
        path = new _paper2.default[PATHS[0]]();
        path.importJSON(PATHS);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('canvas', { id: this.canvasID, width: 300, height: 300 })
      );
    }
  }]);

  return UI;
}(_react2.default.Component);

var spec = {
  name: 'Draw to canvas',
  description: 'draws to canvas',
  implementation: implementation,
  ui: {
    component: _react2.default.createElement(UI, { state: { id: 'canvas' } })
  },
  inputs: {
    PATHS: {}
  },
  outputs: {
    PARSED_PATHS: {}
  }
};

exports.default = spec;