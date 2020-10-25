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

var createVNode = Inferno.createVNode;

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

      return createVNode(2, 'div', 'pigeon-click-block', createVNode(128, 'svg', null, [createVNode(2, 'filter', null, createVNode(2, 'feDropShadow', null, null, {
        'dx': '0',
        'dy': '0',
        'stdDeviation': '0.9',
        'flood-color': markerShadowColor
      }), {
        'id': 'shadow'
      }), createVNode(2, 'path', null, null, {
        'fill': hover ? markerColor : markerColorHover,
        'style': { filter: 'url(#shadow)' },
        'd': 'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
      })], {
        'xmlns': 'http://www.w3.org/2000/svg',
        'style': { width: svgSize + 'px', height: svgSize + 'px' },
        'viewBox': '0 0 24 24'
      }), {
        'style': style,
        'onClick': this.handleClick,
        'onContextMenu': this.handleContextMenu,
        'onMouseOver': this.handleMouseOver,
        'onMouseOut': this.handleMouseOut
      });
    }
  }]);

  return Marker;
}(_infact.Component);

Marker.propTypes = {};
Marker.defaultProps = {
  markerSize: 30,
  markerColor: '#59adcd',
  markerColorHover: '#8cb8c8',
  markerShadowColor: '#fafafa'
};
exports.default = Marker;