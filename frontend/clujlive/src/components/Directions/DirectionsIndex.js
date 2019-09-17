import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import InfoWindowMap from "../InfoWindowMap";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { getHeatmapPoints } from "../../utility/helper";

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const MapMarker = require('../../GoogleMapMarker.svg')
const google = window.google = window.google ? window.google : {}

class Directions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultZoom: 16,
      map: null,
      center: {
        lat: 46.769,
        lng: 23.592
      },
      isMapClicked: false,
      places: this.props.places,
      rating: [],
      opacity: 0.85
    }
  }

  handleToggleMap = () => {
    var newPlaces = [...this.state.places];
    for (var place of newPlaces) {
      place.opened = false;
    }
    this.setState({ places: newPlaces });
  }

  handleInfoClick = (key) => {
    var newPlaces = [...this.state.places];
    for (var place of newPlaces) {
      place.opened = place.id !== key ? false : true;
    }
    this.setState({ places: newPlaces });
  }

  render() {

    if (this.props.places.length > 0) {
      return (
        <div>
          <GoogleMap
            defaultZoom={this.state.defaultZoom}
            center={this.state.center}
            options={{ styles: mapStyles }}
            onClick={this.handleToggleMap}
          >
            {
              this.state.places.map(place => {
                return (
                  <InfoWindowMap
                    place={place}
                    icon={MapMarker}
                    handleInfoClick={this.handleInfoClick}
                  />
                )
              })}
            <DirectionRenderComponent
              key={this.props.places[0] ? this.props.places[0].id : null}
              from={{ fromTitle: this.props.places[0].name, lat: this.props.places[0].latitude, lng: this.props.places[0].longitude }}
              to={{ toTitle: this.props.places[1].name, lat: this.props.places[1].latitude, lng: this.props.places[1].longitude }}
            />
            <HeatmapLayer
              data={getHeatmapPoints(this.state.places)}
              options={{
                dissipating: false,
                radius: 0.001,
                opacity: this.state.opacity,
                gradient: [
                  'rgba(0, 255, 255, 0)',
                  'rgba(0, 255, 255, 0.2)',
                  'rgba(0, 190, 255, 0.4)',
                  'rgba(5, 120, 255, 0.4)',
                  'rgba(10, 60, 255, 0.5)',
                  'rgba(20, 10, 255, 0.5)',
                  'rgba(30, 5, 223, 0.6)',
                  'rgba(70, 10, 191, 0.6)',
                  'rgba(70, 30, 159, 0.5)',
                  'rgba(70, 40, 127, 0.6)',
                  'rgba(70, 40, 91, 0.8)',
                  'rgba(150, 0, 63, 0.8)',
                  'rgba(220, 0, 31, 1)',
                  'rgba(255, 0, 0, 1)'
                ]
              }}
            />
          </GoogleMap>
          <button name={"button"} onClick={() => this.setState({ opacity: 0 })} />
        </div>
      );
    }
    else
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      )
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