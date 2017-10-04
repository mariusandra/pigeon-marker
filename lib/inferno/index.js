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

var _pin = require('./img/pin.png');

var _pin2 = _interopRequireDefault(_pin);

var _pin2x = require('./img/pin@2x.png');

var _pin2x2 = _interopRequireDefault(_pin2x);

var _pinHover = require('./img/pin-hover.png');

var _pinHover2 = _interopRequireDefault(_pinHover);

var _pinHover2x = require('./img/pin-hover@2x.png');

var _pinHover2x2 = _interopRequireDefault(_pinHover2x);

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

var createVNode = _infact.Inferno.createVNode;

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

    _this.handleClick = function () {
      _this.props.onClick && _this.props.onClick(_this.eventParameters());
    };

    _this.handleContextMenu = function () {
      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters());
    };

    _this.handleMouseOver = function () {
      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters());
      _this.setState({ hover: true });
    };

    _this.handleMouseOut = function () {
      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters());
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
  }, {
    key: 'image',
    value: function () {
      return this.isRetina() ? this.isHover() ? _pinHover2x2.default : _pin2x2.default : this.isHover() ? _pinHover2.default : _pin2.default;
    }

    // lifecycle

  }, {
    key: 'componentDidMount',
    value: function () {
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

    value: function () {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          onClick = _props.onClick;

      var style = {
        position: 'absolute',
        transform: 'translate(' + (left - imageOffset.left) + 'px, ' + (top - imageOffset.top) + 'px)',
        cursor: onClick ? 'pointer' : 'default'
      };

      return createVNode(2, 'div', 'pigeon-click-block', createVNode(2, 'img', null, null, {
        'src': this.image(),
        'width': 29,
        'height': 34,
        'alt': ''
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
exports.default = Marker;