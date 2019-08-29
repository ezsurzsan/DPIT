import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import DummyLocations from "../../utility/dummyLocations";
import mapStyles from "../../GoogleMapStyles.json"

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

class Directions extends Component {
  state = {
    defaultZoom: 5,
    map: null,
    center: {
      lat: 23.217724,
      lng: 72.667216
    }
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        defaultCenter={new window.google.maps.LatLng(23.21632, 72.641219)}
        options={{styles: mapStyles}}
      >
        {/* {DummyLocations.map((elem, index) => {
          return (
            <DirectionRenderComponent
              key={index}
              index={index + 1}
              strokeColor={elem.strokeColor}
              from={elem.from}
              to={elem.to}
            />
          );
        })} */}
        {this.props.places.map(place => {
          return (
            <DirectionRenderComponent 
            
            key={place.id}
            index={place.id}
            strokeColor={'#f68f54'}
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