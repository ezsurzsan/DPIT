import React, { Component } from "react";
import './InfoWindowContent.css';

class InfoWindowContent extends Component {
  openText(open) {
    if (open) {
      return "Deschis";
    } else {
      return "Închis";
    }
  }

  openColor(open) {
    if (open) {
      return "#4bd162";
    } else {
      return "#000000";
    }
  }

  render() {
    return (
      <div style={{ width: '310px', overflow: 'hidden' }}>
        <h2 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>{this.props.place.name}</h2>
        <p style={{ textAlign: 'center', fontSize: '120%', color: this.openColor(this.props.place.details.open_now[0]), fontFamily: 'Roboto' }}><b>{this.openText(this.props.place.details.open_now[0])}</b></p>
        <p>
          <div class="btn-group btn-group-justified">
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={this.props.place.menuLink} target={'_blank'}>Meniu</a>
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={this.props.place.website} target={'_blank'}>Website</a>
            <a class="btn btn-info" role="button" style={{ textAlign: 'center' }} href={this.props.place.reservationLink} target="_blank">Rezervari</a>
          </div>
        </p>
      </div>
    )
  }
}

export default InfoWindowContent;