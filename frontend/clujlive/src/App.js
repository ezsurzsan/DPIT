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
    this.getPlaces();
  }

  async getPlaces() {
    const places = await Axios.get("http://localhost:8080/").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      console.log(responseData);
      // TODO
      // return N amount of responses
      // where to call the Google API?
      return responseData
    })
    console.log({places})
    this.setState({ places: places })
  }
}

export default App;