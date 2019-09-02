import Axios from "axios";
import { G_API_KEY } from "../utility/constants";

export default class GetPlaceDetails {
  placeID = null;
  constructor(placeID) {
    this.placeID = placeID;
  }
  getReordering() {
    const placeDetailURL = 'https://maps.googleapis.com/maps/api/place/details/json';
    return Axios
      .get(placeDetailURL, {
        params: {
          placeid: this.placeID,
          key: G_API_KEY
        }
      }
      )
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        console.log(error);
        return Promise.reject('error');
      });
  }

}