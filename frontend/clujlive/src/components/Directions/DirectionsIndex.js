import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import InfoWindowMap from "../InfoWindowMap";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

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
      opacity: 1
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
              data={[new google.maps.LatLng(this.props.places[0].latitude, this.props.places[0].longitude)]}
              options={{
                radius: 35,
                opacity: this.state.opacity
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
        <h1>Something went wrong..</h1>
      </div>
    )
  }

  getHeatmapPoints() {
    var heatmapPoints;
    for (var place in this.state.places) {
      heatmapPoints.push(google.maps.LatLng(place.latitude, place.longitude));
    }
    return heatmapPoints;
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