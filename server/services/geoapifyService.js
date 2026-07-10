const axios = require("axios");

async function getNearbyCafes(destination) {
  const apiKey = process.env.GEOAPIFY_API_KEY;

  // Convert destination into coordinates
  const geoResponse = await axios.get(
    "https://api.geoapify.com/v1/geocode/search",
    {
      params: {
        text: destination,
        apiKey,
      },
    }
  );

  if (
    !geoResponse.data.features ||
    geoResponse.data.features.length === 0
  ) {
    throw new Error("Destination not found.");
  }

  const { lat, lon } =
    geoResponse.data.features[0].properties;

  // Search for cafes nearby
  const placeResponse = await axios.get(
    "https://api.geoapify.com/v2/places",
    {
      params: {
        categories: "catering.cafe",
        filter: `circle:${lon},${lat},5000`,
        limit: 20,
        apiKey,
      },
    }
  );

  return placeResponse.data.features.map((place) => ({
    name: place.properties.name || "Unknown Cafe",
    address: place.properties.formatted || "Address unavailable",
    website: place.properties.website || "",
    lat: place.properties.lat,
    lon: place.properties.lon,
  }));
}

module.exports = getNearbyCafes;