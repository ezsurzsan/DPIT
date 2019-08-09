import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Axios from 'axios';
import mapSkins from './GoogleMapStyles.json';

const MapMarker = require('./GoogleMapMarker.svg')

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={18}
              style={mapStyles}
              initialCenter={{ lat: 46.7695316, lng: 23.5966936 }}
              defaultOptions={mapSkins}
            />
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDve3P1vFG6yiaSqlIyGC_Zr1wIeRov56Q'
  })(MapContainer);