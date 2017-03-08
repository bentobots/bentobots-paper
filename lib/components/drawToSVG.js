'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paper = require('paper');

var _paper2 = _interopRequireDefault(_paper);

var _svgPathBoundingBox = require('svg-path-bounding-box');

var _svgPathBoundingBox2 = _interopRequireDefault(_svgPathBoundingBox);

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
};

// class UI extends React.Component {
//   constructor (props) {
//     super(props)
//     this.divID = `${this.props.id}-div`
//   }
//   componentDidUpdate (prevProps, prevState) {
//     paper.setup()
//     var project = new paper.Project()
//     let path
//     const PATHS = this.props.outputs.PARSED_PATHS
//     if (PATHS[0] && Array.isArray(PATHS[0])) {
//       PATHS.map(PATH => {
//         // path = new paper.Path()
//         path = new paper[PATH[0]]()
//         project.importJSON(PATH)
//       })
//     } else {
//       // path = new paper.Path()
//       path = new paper[PATHS[0]]()
//       path.importJSON(PATHS)
//     }
//     console.log(">>>", project.exportSVG())
//     document.getElementById(this.divID).innerHTML = project.exportSVG({asString: true})
//   }
//   render () {
//     return (<div id={this.divID} style={{width: 300, height: 300}}></div>)
//   }
// }

var UI = function (_React$Component) {
  _inherits(UI, _React$Component);

  function UI(props) {
    _classCallCheck(this, UI);

    var _this = _possibleConstructorReturn(this, (UI.__proto__ || Object.getPrototypeOf(UI)).call(this, props));

    _this.divID = _this.props.id + '-div';
    return _this;
  }

  _createClass(UI, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      _paper2.default.setup();
      var path = void 0;
      var PATHS = this.props.outputs.PARSED_PATHS;
      if (PATHS[0] && Array.isArray(PATHS[0])) {} else {
        path = new _paper2.default[PATHS[0]]();
        path.importJSON(PATHS);
        //  transform="scale(35.43307)"
        var svg = '<?xml version="1.0" encoding="utf-8"?>\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="' + (0, _svgPathBoundingBox2.default)(path.getPathData()).toString() + '">\n        <g fill="#000"><path d="' + path.getPathData() + '"></path></g>\n      </svg>';
        document.getElementById(this.divID).innerHTML = svg;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.divID, style: { width: 300, height: 300 } });
    }
  }]);

  return UI;
}(_react2.default.Component);

var spec = {
  name: 'Draw to SVG',
  description: 'draws to SVG',
  implementation: implementation,
  ui: {
    component: _react2.default.createElement(UI, null)
  },
  inputs: {
    PATHS: {}
  },
  outputs: {
    PARSED_PATHS: {}
  }
};

exports.default = spec;