import React, { Component } from "react";
import './InfoWindowContent.css';

class InfoWindowContent extends Component {
  render() {
    return (
      <div style={{ width:'310px', overflow: 'hidden'}}>
        <h2 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>{this.props.place.name}</h2>
        <p style={{ textAlign: 'center', fontSize:'120%', color: '#4bd162', fontFamily: 'Roboto' }}><b>Deschis</b></p>
        <p> 
        <div class="btn-group btn-group-justified">
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={ this.props.place.menuLink } target={'_blank'}>Meniu</a> 
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={ this.props.place.website } target={'_blank'}>Website</a> 
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={ this.props.place.reservationLink } target="_blank">Rezervari</a>
        </div>
        </p>
      </div>
    )
  }
}

export default InfoWindowContent;