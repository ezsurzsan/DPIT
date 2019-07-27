// Import React and React DOM
import * as React from 'react'
import { render } from 'react-dom'

// Import Google Map component
import GoogleMapComponentWithMarker from './GoogleMapWithMarker.jsx'

// Some default styles
const styles = {
  width: '100%',
  height: '536px'
}

// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      markerLang: 0,
      markerLat: 0
    }
  }

  render() {
    return (
      <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=API_KEY"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

// Render everything in HTML
render(<MapWrapper />, document.getElementById('root'))
