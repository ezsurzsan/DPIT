import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import InfoWindowContent from './InfoWindowContent.js'

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
				icon={this.props.icon}
				opened={this.props.place.opened}
				onClick={() => this.handleClick(this.state.key)}
				label={this.props.place.name}
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