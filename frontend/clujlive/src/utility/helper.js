const google = window.google = window.google ? window.google : {}

const convertLatLngToObj = (lat, lng) => {
  return {
    lat,
    lng
  };
};

const createLatLngObject = latLng => {
  const latLngArray = latLng.split(",");
  return {
    lat: latLngArray[0],
    lng: latLngArray[1]
  };
};

const createLocationObject = (
  from,
  fromTitle,
  to,
  toTitle,
  strokeColor = "#f68f54"
) => {
  return {
    from: { ...createLatLngObject(from), fromTitle },
    to: { ...createLatLngObject(to), toTitle },
    strokeColor: strokeColor
  };
};

const getHeatmapPoints = (places) => {
  var heatmapPoints = [];
  for (var place of places) {
    heatmapPoints[heatmapPoints.length] = {
      location: new google.maps.LatLng(place.latitude, place.longitude),
      // random formula to get visually pleasing data
      weight: place.popularity
    };
  }
  return heatmapPoints;
}

export { convertLatLngToObj, createLocationObject, createLatLngObject, getHeatmapPoints };
