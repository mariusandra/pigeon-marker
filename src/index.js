import { React, Component } from './infact'
import PropTypes from 'prop-types'

const imageOffset = {
  left: 15,
  top: 31
}

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
          style={{width: `${svgSize}px`, height: `${svgSize}px`}}
          viewBox="0 0 24 24">
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.9"
              floodColor={markerShadowColor}/>
          </filter>
          <path
            fill={hover ? markerColor : markerColorHover}
            style={{filter: 'url(#shadow)'}}
            d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
        </svg>
      </div>
    )
  }
}
