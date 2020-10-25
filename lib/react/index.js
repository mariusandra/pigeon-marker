'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _infact = require('./infact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
        anchor: _this.props.anchor,
        payload: _this.props.payload
      };
    };

    _this.handleClick = function (event) {
      _this.props.onClick && _this.props.onClick(_this.eventParameters(event));
    };

    _this.handleContextMenu = function (event) {
      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters(event));
    };

    _this.handleMouseOver = function (event) {
      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters(event));
      _this.setState({ hover: true });
    };

    _this.handleMouseOut = function (event) {
      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters(event));
      _this.setState({ hover: false });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  // what do you expect to get back with the event


  _createClass(Marker, [{
    key: 'isRetina',

    // controls
    value: function () {
      return typeof window !== 'undefined' && window.devicePixelRatio >= 2;
    }

    // modifiers

  }, {
    key: 'isHover',
    value: function () {
      return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover;
    }

    // delegators

  }, {
    key: 'render',

    // render

    value: function () {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          onClick = _props.onClick,
          markerColor = _props.markerColor,
          markerColorHover = _props.markerColorHover,
          markerSize = _props.markerSize,
          markerShadowColor = _props.markerShadowColor;
      var hover = this.state.hover;

      var svgSize = markerSize;

      var style = {
        position: 'absolute',
        transform: 'translate(' + (left - imageOffset.left) + 'px, ' + (top - imageOffset.top) + 'px)',
        cursor: onClick ? 'pointer' : 'default'
      };

      if (this.isRetina()) {
        svgSize *= 2;
      }

      return _infact.React.createElement('div', { style: style,
        className: 'pigeon-click-block',
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut }, _infact.React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        style: { width: svgSize + 'px', height: svgSize + 'px' },
        viewBox: '0 0 24 24' }, _infact.React.createElement('filter', { id: 'shadow' }, _infact.React.createElement('feDropShadow', { dx: '0', dy: '0', stdDeviation: '0.9',
        floodColor: markerShadowColor })), _infact.React.createElement('path', {
        fill: hover ? markerColor : markerColorHover,
        style: { filter: 'url(#shadow)' },
        d: 'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z' })));
    }
  }]);

  return Marker;
}(_infact.Component);

Marker.propTypes = {
  // marker
  markerSize: _propTypes2.default.number,
  markerColor: _propTypes2.default.string,
  markerColorHover: _propTypes2.default.string,
  markerShadowColor: _propTypes2.default.string,

  // input, passed to events
  anchor: _propTypes2.default.array.isRequired,
  payload: _propTypes2.default.any,

  // optional modifiers
  hover: _propTypes2.default.bool,

  // callbacks
  onClick: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,

  // pigeon variables
  left: _propTypes2.default.number,
  top: _propTypes2.default.number,

  // pigeon functions
  latLngToPixel: _propTypes2.default.func,
  pixelToLatLng: _propTypes2.default.func
};
Marker.defaultProps = {
  markerSize: 30,
  markerColor: '#59adcd',
  markerColorHover: '#8cb8c8',
  markerShadowColor: '#fafafa'
};
exports.default = Marker;