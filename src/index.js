import { React, Component } from './infact'
import PropTypes from 'prop-types'

export default class Marker extends Component {
  static propTypes = process.env.BABEL_ENV === 'inferno' ? {} : {
    // marker
    markerSize: PropTypes.number,
    markerColor: PropTypes.string,
    markerColorHover: PropTypes.string,
    markerShadowColor: PropTypes.string,

    // input, passed to events
    anchor: PropTypes.array.isRequired,
    payload: PropTypes.any,

    // optional modifiers
    hover: PropTypes.bool,

    // callbacks
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,

    // pigeon variables
    left: PropTypes.number,
    top: PropTypes.number,

    // pigeon functions
    latLngToPixel: PropTypes.func,
    pixelToLatLng: PropTypes.func
  }
  static defaultProps = {
    markerSize: 30,
    markerColor: '#59adcd',
    markerColorHover: '#8cb8c8',
    markerShadowColor: '#fafafa'
  };

  constructor (props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  // what do you expect to get back with the event
  eventParameters = (event) => ({
    event,
    anchor: this.props.anchor,
    payload: this.props.payload
  })

  // controls
  isRetina () {
    return typeof window !== 'undefined' && window.devicePixelRatio >= 2
  }

  // modifiers
  isHover () {
    return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover
  }

  // delegators

  handleClick = (event) => {
    this.props.onClick && this.props.onClick(this.eventParameters(event))
  }

  handleContextMenu = (event) => {
    this.props.onContextMenu && this.props.onContextMenu(this.eventParameters(event))
  }

  handleMouseOver = (event) => {
    this.props.onMouseOver && this.props.onMouseOver(this.eventParameters(event))
    this.setState({ hover: true })
  }

  handleMouseOut = (event) => {
    this.props.onMouseOut && this.props.onMouseOut(this.eventParameters(event))
    this.setState({ hover: false })
  }

  // render

  render () {
    const { left, top, onClick, markerColor, markerColorHover, markerSize, markerShadowColor } = this.props
    const { hover } = this.state
    let svgSize = markerSize

    const imageOffset = {
      left: svgSize / 2,
      top: svgSize
    }
    const style = {
      position: 'absolute',
      transform: `translate(${left - imageOffset.left}px, ${top - imageOffset.top}px)`,
      cursor: onClick ? 'pointer' : 'default'
    }

    if (this.isRetina()) {
      svgSize *= 2
    }

    return (
      <div style={style}
        className='pigeon-click-block'
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{width: svgSize, height: svgSize}}
        >
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.9"
              floodColor={markerShadowColor}/>
          </filter>
          <ellipse
            cx="11.961"
            cy="22.541"
            fill="#8B8B8B"
            fillOpacity="0.8"
            strokeOpacity="0.65"
            paintOrder="fill"
            rx="6.058"
            ry="1.431"
            bxOrigin="0.77789 -3.095136"
          ></ellipse>
          <path
            fill={hover ? markerColorHover : markerColor}
            stroke="#FFF"
            strokeLinecap="square"
            strokeMiterlimit="1"
            strokeOpacity="0.9"
            strokeWidth="2"
            d="M12 1.017c-4.095 0-7.416 3.201-7.416 7.152 0 5.361 7.416 13.28 7.416 13.28s7.415-7.919 7.415-13.28c0-3.951-3.32-7.152-7.415-7.152z"
            filter="url(#shadow)"
            paintOrder="stroke"
            bxOrigin="0.631861 0.519651"
          ></path>
          <path
            fill={hover ? markerColorHover : markerColor}
            style={{filter: 'url(#shadow)'}}
            d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
          />
          <circle
            cx="11.46"
            cy="10.761"
            r="2.122"
            fill="#FFF"
            fillOpacity="0.85"
            strokeOpacity="0.85"
            paintOrder="fill"
            transform="matrix(1.2673 0 0 1.22227 -2.505 -4.988)"
            bxOrigin="1.115508 1.285579"
          ></circle>
        </svg>
      </div>
    )
  }
}
