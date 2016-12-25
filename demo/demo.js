import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Marker from 'pigeon-marker'

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [50.879, 4.6997],
      zoom: 12
    }
  }

  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }

  render () {
    const { center, zoom } = this.state

    return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        <Map center={center}
             zoom={zoom}
             width={600}
             height={400}>
          <Marker anchor={[50.879, 4.6997]} payload={1} onClick={this.handleMarkerClick} />
          <Marker anchor={[50.874, 4.6947]} payload={2} onClick={this.handleMarkerClick} />
        </Map>
      </div>
    )
  }
}
