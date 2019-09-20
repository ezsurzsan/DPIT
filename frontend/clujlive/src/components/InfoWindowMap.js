import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import InfoWindowContent from './InfoWindowContent.js'

const google = window.google = window.google ? window.google : {}


class InfoWindowMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			key: this.props.place.id
		}
	}

	handleClick = function (key) {
		this.props.handleInfoClick(key);
	}

	render() {
		return (
			<Marker
				key={this.props.place.id}
				position={{ lat: this.props.place.latitude, lng: this.props.place.longitude }}
				icon={{
					url: this.props.icon,
					labelOrigin: new google.maps.Point(30, 70)
				}}
				opened={this.props.place.opened}
				onClick={() => this.handleClick(this.state.key)}
				label={{
					text: this.props.place.name,
					fontFamily: "Roboto",
					fontWeight: "900",
					fontSize: "17px",
					color: "#fdeff9"
				}}
			>
				{
					this.props.place.opened &&
					<InfoWindow>
						<InfoWindowContent
							place={this.props.place}
						/>
					</InfoWindow>
				}
			</Marker>
		)
	}
}

export default InfoWindowMap;