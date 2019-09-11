import React, { Component } from "react";
import Directions from "./components/Directions/DirectionsIndex";
import Axios from 'axios';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: []
    }
  }

  render() {
    return <Directions places={this.state.places} />;
  }

  componentDidMount() {
    this.getPlaces();
  }

  async getPlaces() {
    const places = await Axios.get("http://localhost:8080/").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      return responseData
    })
    var newPlaces=[];
    for (var place of places) {
      newPlaces.push({...place, opened: false});
    }
    this.setState({ places: newPlaces })
  }
}

export default App;
