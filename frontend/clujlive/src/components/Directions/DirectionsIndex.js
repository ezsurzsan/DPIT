import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import InfoWindowMap from "../InfoWindowMap";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { getHeatmapPopularity, getHeatmapPriceLevel, getHeatmapRating } from "../../utility/helper";

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const MapMarker = require('../../GoogleMapMarker.svg')

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
      heatmapData: getHeatmapPopularity(this.props.places),
      opacity: 0.95
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

  onZoomChanged = () => {
    const zoom = this.map.current.getZoom();
    console.log(zoom);
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
            onZoomChanged={() => this.onZoomChanged()}
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
              data={this.state.heatmapData}
              options={{
                dissipating: false,
                radius: 0.0013,
                opacity: this.state.opacity,
                gradient: [
                  'rgba(3, 0, 30, 0)',
                  'rgba(3, 0, 30, 0.2)',
                  'rgba(115, 3, 192, 0.6)',
                  'rgba(236, 56, 188, 0.9)',
                  'rgba(253, 239, 249, 1)'
                ]
              }}
            />
          </GoogleMap>
          <div className="container">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ heatmapData: []})}>Clear Visualizer</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ heatmapData: getHeatmapPopularity(this.state.places) })}>Popularity</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ heatmapData: getHeatmapPriceLevel(this.state.places) })}>Price Level</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ heatmapData: getHeatmapRating(this.state.places) })}>Rating</button>
          </div>
        </div >
      );
    }
    else {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      )
    }
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