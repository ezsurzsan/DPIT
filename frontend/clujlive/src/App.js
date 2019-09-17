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
    if (this.state.places.length > 0) {
      return <Directions places={this.state.places} />;
    }
    else {
      return (
        <div id="container">
          <div id="content">
            <h1 id="loading">loading...</h1>
          </div>
        </div>
      )
    }
  }

  async componentDidMount() {
    await this.getPlaces();
    console.log("get");
  }

  async getPlaces() {
    const places = await Axios.get("http://localhost:8080/").then(response => {
      return Promise.resolve(response.data);
    }).then(responseData => {
      return responseData
    })
    var newPlaces = [];
    for (var place of places) {
      const response = await Axios.get("http://localhost:8080/rating", { params: { placeID: place.googleID } }).then(response => {
        return Promise.resolve(response.data);
      })
      newPlaces.push({ ...place, opened: false, rating: response });
    }
    console.log("state");
    this.setState({ places: newPlaces })
  }
}

export default App;
