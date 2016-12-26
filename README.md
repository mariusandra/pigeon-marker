# pigeon-marker - Marker component for pigeon-maps

[![npm version](https://img.shields.io/npm/v/pigeon-marker.svg)](https://www.npmjs.com/package/pigeon-marker)

React demo: https://mariusandra.github.io/pigeon-marker/

Inferno demo: https://mariusandra.github.io/pigeon-marker/inferno/

Example: https://github.com/mariusandra/pigeon-marker/blob/master/demo/demo.js

API: https://github.com/mariusandra/pigeon-marker/blob/master/src/index.js

To use in your component (with beta version 0.3.0):

```js
// default for React
import Marker from 'pigeon-marker'

// explicitly ask for the React version
import Marker from 'pigeon-marker/react'

// explicitly ask for the Inferno version
import Marker from 'pigeon-marker/inferno'

// choose the Inferno or React version based on BABEL_ENV
import Marker from 'pigeon-marker/infact'

class Demo extends Component {
  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }

  render () {
    return (
      <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400}>
        <Marker anchor={[50.879, 4.6997]} payload={1} onClick={this.handleMarkerClick} />
      </Map>
    )
  }
}

```
