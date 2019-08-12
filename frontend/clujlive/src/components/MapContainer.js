import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import mapSkins from './GoogleMapStyles.json';

const MapMarker = require('./GoogleMapMarker.svg')

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={{ lat: 46.7695316, lng: 23.5966936 }}
        // defaultOptions={mapSkins}
        onClick={this.onMapClicked}
      >
        {this.props.markers.map(marker => {
          return (
            <Marker
              name={marker.name}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: MapMarker,
                scaledSize: new this.props.google.maps.Size(64, 64)
                // anchor: new this.props.google.maps.Point(32,32),
              }}
              onClick={this.onMarkerClick}
            />
          )
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDve3P1vFG6yiaSqlIyGC_Zr1wIeRov56Q'
})(MapContainer);