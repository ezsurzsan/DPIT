import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapStyles from './GoogleMapStyles.json';
import Axios from 'axios';

const MapMarker = require('./GoogleMapMarker.svg')

function createMapOptions(maps) {
    return {
        styles: mapStyles,
    }
}

const GoogleMapBase = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={{ lat: 46.7695316, lng: 23.5966936 }}
        defaultZoom={19}
        options={createMapOptions()}
    >
        {props.markers.map(marker => {
            return (
                <Marker
                    icon={MapMarker}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
            )
        })}
    </GoogleMap>
));

class Map extends Component {
    constructor(props) {
        super(props)

        // get places into this list using the Google API, hardcoded example
        this.state = {
            places: [
                { lat: 46.7695316, lng: 23.5966936 },
                { lat: 46.7690316, lng: 23.5966936 }
            ]
        }
    }
    componentDidMount() {
        // const center = Axios.get("http://localhost:8080/").then(response => {
        //     return Promise.resolve(response.data);
        // }).then(responseData => {
        //     console.log(responseData);
        //     this.setState({places: {lat: responseData.latitude, lng: responseData.longitude}})
        // })
    }
    render() {
        const b = this.getCenter();

        console.log(this.state.places);
        return (
            <div>
                <GoogleMapBase
                    containerElement={<div style={{ height: `100vh`, width: '100%' }} />} // height cannot be set as 100%
                    mapElement={<div style={{ height: `100%`, width: '100%' }} />}
                    markers={this.state.places}
                />
            </div>
        );
    }

    async getCenter() {
        const a = await Axios.get("http://localhost:8080/").then(response => {
            return Promise.resolve(response.data);
        }).then(responseData => {
            console.log(responseData);
            // this.setState({ places: { lat: responseData.latitude, lng: responseData.longitude } })
            return [{ lat: responseData.latitute, lng: responseData.longitude }]
        })
        console.log(a);
        this.setState({places : a})
    }
};

export default Map;