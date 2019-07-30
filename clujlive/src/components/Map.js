import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapStyles from './GoogleMapStyles.json';

const MapMarker = require('./GoogleMapMarker.svg')

function createMapOptions(maps) {
    return {
        styles: mapStyles,
    }
}

const GoogleMapBase = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={{ lat: 46.7695316, lng: 23.5966936 }}
        defaultZoom={19}
        options={createMapOptions()}
    >
        { props.markers.map(marker => {
            return (
                <Marker
                    icon={ MapMarker }
                    // position={{ lat: 46.7695316, lng: 23.5966936 }}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
            )
        })}
    </GoogleMap>
));

class Map extends Component {
    constructor(props) {
        super(props)

        // get places into this list using the Google API, hardcoded example
        this.state = {
            places: [
                { lat: 46.7695316, lng: 23.5966936 },
                { lat: 46.7690316, lng: 23.5966936 }
            ]
        }
    }
    componentDidMount() {
        
    }
    render() {
    return(
      <div>
        <GoogleMapBase
          containerElement={<div style={{ height: `100vh`, width: '100%' }} />} // height cannot be set as 100%
          mapElement={<div style={{ height: `100%`, width: '100%' }} />}
          markers={this.state.places}
        />
      </div>
   );
   }
};

export default Map;