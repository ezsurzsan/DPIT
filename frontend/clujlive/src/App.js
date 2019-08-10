import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    // get places into this list using the Google API, hardcoded example
    this.state = {
      places: []
    }
  }

  render() {
    return (
      <div>
        <MapContainer
          markers={this.state.places}
        />
      </div>
    );
  }

  componentDidMount() {
    this.getCenter();
  }

  async getCenter() {
    const places = await Axios.get("http://localhost:8080/").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      console.log(responseData);
      // TODO
      // return N amount of responses
      // where to call the Google API?
      return [{ lat: responseData[0].latitute, lng: responseData[0].longitude, name: responseData[0].name}, { lat: responseData[1].latitute, lng: responseData[1].longitude, name: responseData[1].name}]
    })
    console.log({places})
    this.setState({ places: places })
  }
}

export default App;