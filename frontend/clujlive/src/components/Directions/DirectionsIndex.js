import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

class Directions extends Component {
  state = {
    defaultZoom: 14,
    map: null,
    center: {
      lat: 46.76,
      lng: 23.6
    }
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        options={{styles: mapStyles}}
      >
        {this.props.places.map(place => {
          return (
            <DirectionRenderComponent 
            key={place.id}
            index={place.id}
            from={ {fromTitle:place.name, lat:place.latitude, lng:place.longitude} }
            to={ {toTitle:place.name + 'x', lat:place.latitude+ 0.2, lng:place.longitude+ 0.2} }
            />
          )
        })}
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