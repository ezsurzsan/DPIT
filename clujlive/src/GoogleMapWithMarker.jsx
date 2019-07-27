// GoogleMapWithMarker.jsx

// Import React
import * as React from 'react'

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{
        lat: 46.769540, // latitude for the center of the map
        lng: 23.596628 // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles // change default map styles
      }}
    >
      <Marker
        icon={mapMarker}
        position={{
          lat: 46.769540, // latitude to position the marker
          lng: 23.596628 // longitude to position the marker
        }}
      />
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker