import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import mapStyles from "../../GoogleMapStyles.json"
import { Marker } from "react-google-maps";
import Axios from 'axios';

// import GetPlaceDetails from "../../actions/GetPlaceDetails";

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
      rating: []
    }
  }
  render() {
    const onClickAction = function () {
      console.log("OnClick");
      // const placeDetail=new Get.PlaceDetails('ChIJu-gzUZ0OSUcRBeJI7iWn1ws');
      // placeDetail.getReordering();
    };
    return (
      <div>
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
            // onClick={this.getRating(this)}
          />
          <DirectionRenderComponent
            key={this.props.places[0].id}
            index={this.props.places[0].id}
            from={{ fromTitle: this.props.places[0].name, lat: this.props.places[0].latitude, lng: this.props.places[0].longitude }}
            to={{ toTitle: this.props.places[1].name, lat: this.props.places[1].latitude, lng: this.props.places[1].longitude }}
          />
        </GoogleMap>
        <button name={"button"} onClick={this.getRating(this)} />
      </div>
    );
  }
  async getRating(that) {
    const response = await Axios.get("http://localhost:8080/rating").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      console.log(responseData);
      return responseData
    })
    console.log("rating: " + parseFloat(response))
    that.setState({ rating: parseFloat(response) })
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