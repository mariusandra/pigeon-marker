'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pin = require('./img/pin.png');

var _pin2 = _interopRequireDefault(_pin);

var _pin2x = require('./img/pin@2x.png');

var _pin2x2 = _interopRequireDefault(_pin2x);

var _pinHover = require('./img/pin-hover.png');

var _pinHover2 = _interopRequireDefault(_pinHover);

var _pinHover2x = require('./img/pin-hover@2x.png');

var _pinHover2x2 = _interopRequireDefault(_pinHover2x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageOffset = {
  left: 15,
  top: 31
};

var Marker = function (_Component) {
  _inherits(Marker, _Component);

  function Marker(props) {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));

    _this.eventParameters = function (event) {
      return {
        event: event,
        payload: _this.props.payload,
        position: _this.props.position
      };
    };

    _this.handleClick = function (event) {
      _this.props.onClick && _this.props.onClick(_this.eventParameters());
    };

    _this.handleContextMenu = function (event) {
      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters());
    };

    _this.handleMouseOver = function (event) {
      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters());
      _this.setState({ hover: true });
    };

    _this.handleMouseOut = function (event) {
      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters());
      _this.setState({ hover: false });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  // controls


  _createClass(Marker, [{
    key: 'isRetina',
    value: function isRetina() {
      return typeof window !== 'undefined' && window.devicePixelRatio >= 2;
    }

    // modifiers

  }, {
    key: 'isHover',
    value: function isHover() {
      return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover;
    }
  }, {
    key: 'image',
    value: function image() {
      return this.isRetina() ? this.isHover() ? _pinHover2x2.default : _pin2x2.default : this.isHover() ? _pinHover2.default : _pin2.default;
    }

    // lifecycle

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var images = this.isRetina() ? [_pin2x2.default, _pinHover2x2.default] : [_pin2.default, _pinHover2.default];

      images.forEach(function (image) {
        var img = new window.Image();
        img.src = image;
      });
    }

    // delegators

  }, {
    key: 'render',


    // render

    value: function render() {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          onClick = _props.onClick;


      return _react2.default.createElement(
        'div',
        { style: { position: 'absolute', left: left - imageOffset.left, top: top - imageOffset.top, cursor: onClick ? 'pointer' : 'default' },
          className: 'pigeon-click-block',
          onClick: this.handleClick,
          onContextMenu: this.handleContextMenu,
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut },
        _react2.default.createElement('img', { src: this.image(), width: 29, height: 34, alt: '' })
      );
    }
  }]);

  return Marker;
}(_react.Component);

Marker.propTypes = {
  // input
  position: _react.PropTypes.array.isRequired,
  payload: _react.PropTypes.any, // passed to events

  // modifiers
  hover: _react.PropTypes.bool,

  // callbacks
  onClick: _react.PropTypes.func,
  onContextMenu: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,

  // pigeon variables
  left: _react.PropTypes.number,
  top: _react.PropTypes.number,

  // pigeon functions
  latLngToPixel: _react.PropTypes.func,
  pixelToLatLng: _react.PropTypes.func
};
exports.default = Marker;