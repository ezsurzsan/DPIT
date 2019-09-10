import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class InfoWindowMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	handleToggle = (bool) => {
		this.setState({
			isOpen: bool
		});
	}
	// document.getElementByClassName("info").addEventListener("click", this.handleToggle(false));
	render() {
		return (
			<Marker
				key={this.props.id}
				position={{ lat: this.props.lat, lng: this.props.lng }}
				onClick={() => this.handleToggle(!this.state.isOpen)}
				icon={this.props.icon}
			>
				{
					this.state.isOpen &&
					<InfoWindow
						onCloseClick={this.props.handleCloseCall}

					>
						<h1>{this.props.name}</h1>
					</InfoWindow>
				}
			</Marker>

		)
	}
}

export default InfoWindowMap;