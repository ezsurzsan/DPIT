import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import { Marker } from "react-google-maps";

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const MapMarker = require('../../GoogleMapMarker.svg')

class Directions extends Component {
  state = {
    defaultZoom: 14,
    map: null,
    center: {
      lat: 46.769,
      lng: 23.5964
    }
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        options={{ styles: mapStyles }}
      >
        <Marker
          defaultIcon={{
            url: MapMarker,
            // look for size in documentation
          }}
          position={{
            lat: this.props.places[0].latitude,
            lng: this.props.places[0].longitude
          }}
        />
        <Marker
          defaultIcon={{
            url: MapMarker,
            // look for size in documentation
          }}
          position={{
            lat: this.props.places[1].latitude,
            lng: this.props.places[1].longitude
          }}
        />
          <DirectionRenderComponent
            key={this.props.places[0].id}
            index={this.props.places[0].id}
            from={{ fromTitle: this.props.places[0].name, lat: this.props.places[0].latitude, lng: this.props.places[0].longitude }}
            to={{ toTitle: this.props.places[1].name, lat: this.props.places[1].latitude, lng: this.props.places[1].longitude}}
          />
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Directions);