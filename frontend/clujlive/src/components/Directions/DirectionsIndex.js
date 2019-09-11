import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import Axios from 'axios';
import InfoWindowMap from "../InfoWindowMap";

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const MapMarker = require('../../GoogleMapMarker.svg')

class Directions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultZoom: 14,
      map: null,
      center: {
        lat: 46.769,
        lng: 23.5964
      },
      isMapClicked: false,
      rating: [],
      places: this.props.places
    }
  }

  handleToggleMap = () => {
    var newPlaces = [...this.state.places];
    for (var place of newPlaces) {
      place.opened = false;
    }
    this.setState({places: newPlaces});
  }

  handleInfoClick = (key) => {
    var newPlaces = [...this.state.places];
    for (var place of newPlaces) {
      place.opened = place.id !== key ? false : true;
    }
    this.setState({places: newPlaces});
  }

  render() {
    // still not working
    this.getRating = this.getRating.bind(this);
    console.log(this.state.places);
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
                  id={place.id}
                  lat={place.latitude}
                  lng={place.longitude}
                  name={place.name}
                  icon={MapMarker}
                  opened={place.opened}
                  handleInfoClick={this.handleInfoClick}
                />
              )
            })}
          <DirectionRenderComponent
            key={this.props.places[0].id}
            from={{ fromTitle: this.props.places[0].name, lat: this.props.places[0].latitude, lng: this.props.places[0].longitude }}
            to={{ toTitle: this.props.places[1].name, lat: this.props.places[1].latitude, lng: this.props.places[1].longitude }}
          />
        </GoogleMap>
        <button name={"button"} onClick={() => this.getRating()} />
      </div>
    );
  }
  async getRating() {
    console.log("button pressed");
    const response = await Axios.get("http://localhost:8080/rating").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      console.log(responseData);
      return responseData
    })
    console.log("rating: " + parseFloat(response))
    this.setState({ rating: parseFloat(response) })
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