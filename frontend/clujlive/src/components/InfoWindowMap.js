import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class InfoWindowMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			key: this.props.id
		}
	}

	handleToggle = (bool) => {
		this.setState({
			isOpen: bool
		});
	}

	handleClick = function(key) {
		console.log('1. Received click in Button', key);
		this.props.handleInfoClick(key);
	}
	render() {
		console.log("rendered, key:", this.state.key);
		return (
			<Marker
				key={this.props.key}
				position={{ lat: this.props.lat, lng: this.props.lng }}
				//onClick={() => this.handleToggle(!this.state.isOpen)}
				icon={this.props.icon}
				opened={this.props.opened}
				onClick={() => this.handleClick(this.state.key)}
			>
				{
					this.props.opened &&
					<InfoWindow
						// onCloseClick={this.props.handleCloseCall}
					>
						<h1>{this.props.name}</h1>
					</InfoWindow>
				}
			</Marker>

		)
	}
}

export default InfoWindowMap;