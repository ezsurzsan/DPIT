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

const getHeatmapPopularity = (places) => {
  var heatmapPoints = [];
  for (var place of places) {
    heatmapPoints[heatmapPoints.length] = {
      location: new google.maps.LatLng(place.latitude, place.longitude),
      weight: place.popularity
    };
  }
  return heatmapPoints;
}

const getHeatmapRating = (places) => {
  var heatmapPoints = [];
  for (var place of places) {
    heatmapPoints[heatmapPoints.length] = {
      location: new google.maps.LatLng(place.latitude, place.longitude),
      weight: place.details.rating / 5
    };
  }
  console.log(heatmapPoints);
  return heatmapPoints;
}

const getHeatmapPriceLevel = (places) => {
  var heatmapPoints = [];
  for (var place of places) {
    heatmapPoints[heatmapPoints.length] = {
      location: new google.maps.LatLng(place.latitude, place.longitude),
      weight: ((place.details.price_level + 1 ) / 5)
    };
  }
  console.log(heatmapPoints);
  return heatmapPoints;
}

export { convertLatLngToObj, createLocationObject, createLatLngObject, getHeatmapPopularity, getHeatmapRating, getHeatmapPriceLevel };
