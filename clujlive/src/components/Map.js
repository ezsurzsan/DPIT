import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapStyles from './GoogleMapStyles.json';

const MapMarker = require('./GoogleMapMarker.svg')

function createMapOptions(maps) {
    return {
      styles: mapStyles,
    }
  }

class Map extends Component {
    render() {
        const GoogleMapBase = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={ { lat: 46.7695316, lng: 23.5966936 } }
                defaultZoom={ 19 }
                options={ createMapOptions() }
            >
                <Marker
                    icon={ MapMarker }
                    position={{ lat: 46.7695316, lng: 23.5966936 }}
                />    
            </GoogleMap>
        ));
   return(
      <div>
        <GoogleMapBase
          containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%`, width: '100%' }} /> }
        />
      </div>
   );
   }
};

export default Map;