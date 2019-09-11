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

	handleClick = function (key) {
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
						<div>
							{/* <style>
								a:link, a:visited {
								font-family: Baskerville Old Face;
								color: white;
								background-color: red;
								padding: 15px 25px;
								text-align: center;
								text-decoration: none;
								display: inline-block;
						 	 	}
								a:hover, a:active {
									background - color: black;
						  		}
						  	</style> */}
							<p style={{ color: 'green' }}>Deschis</p>
							<h1 style={{ fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>{this.props.name}</h1>
							<p style={{ textAlign: 'left' }}> <a herf={this.props.menu_link} target="_blank">Meniu</a> </p>
							<p style={{ textAlign: 'center' }}> <a herf={this.props.website} target="_blank">Website</a> </p>
							<p style={{ textAlign: 'right' }}> <a herf={this.props.reservation_link} target="_blank">Rezervari</a> </p>
						</div>
					</InfoWindow>
				}
			</Marker>

		)
	}
}

export default InfoWindowMap;