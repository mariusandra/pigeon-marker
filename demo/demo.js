import React, { Component } from 'react'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [50.879, 4.6997],
      zoom: 12
    }
  }

  handleMarkerClick = ({ event, payload, position }) => {
    console.log(`Marker #${payload} clicked at: `, position)
  }

  render () {
    const { center, zoom } = this.state

    return (
      <div>
        <Map center={center}
             zoom={zoom}
             width={600}
             height={400}>
          <Marker position={[50.879, 4.6997]} payload={1} onClick={this.handleMarkerClick} />
          <Marker position={[50.874, 4.6947]} payload={2} onClick={this.handleMarkerClick} />
        </Map>
      </div>
    )
  }
}
