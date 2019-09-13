import React, { Component } from "react";
import './InfoWindowContent.css';

class InfoWindowContent extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>{this.props.place.name}</h1>
        <p style={{ color: 'green', fontFamily: 'Roboto' }}>Deschis</p>
        <p style={{ textAlign: 'left' }}> <a href={ this.props.place.menuLink } target={'_blank'}>Meniu</a> </p>
        <p style={{ textAlign: 'center' }}> <a href={ this.props.place.website } target={'_blank'}>Website</a> </p>
        <p style={{ textAlign: 'right' }}> <a href={ this.props.place.reservationLink } target="_blank">Rezervari</a> </p>
      </div>
    )
  }
}

export default InfoWindowContent;