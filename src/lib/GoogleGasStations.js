require('../typdef');
const ENV = require('../../.env.json');
const Station = require('./Station');

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

/**
 * @typedef GoogleResponse
 * @type {object}
 * @property {GoogleResponseResult[]} results - results of the request
 */

/**
 * @typedef GoogleResponseResult
 * @type {object}
 * @property {{location: LatLng}} geometry - location data
 * @property {string} icon
 * @property {string} name
 * @property {string} rating
 * @property {{open_now: boolean}} opening_hours
 */

/**
 * GoogleGasStations Class
 * @class
 * @classdesc An interface to interact with Google Places API for gas station locations
 */
function GoogleGasStations() {}

/**
 * @param {LatLng} position
 * @returns {Promise<Station[]>}
 */
GoogleGasStations.prototype.fetch = async function (position) {
    const url = buildURL(position);
    const response = await ngi.http.get(url);
    if (response) {
        return mapResponse(response.payload);
    } else {
        return undefined;
    }
};

/**
  * maps the response from the API to a Station Class Format

 * @param {GoogleResponse} response 
 * @returns {Station[]}
 */
function mapResponse(response) {
    return response.results.map(function (station) {
        return new Station({
            name: station.name,
            lat: station.geometry.location.lat,
            lng: station.geometry.location.lng,
        });
    });
}

/**
 * builds the URL with some custom parameters
 * @param {LatLng} position
 * @returns {string} the request string query
 */
function buildURL(position) {
    const params = [];
    params.push(`type=gas_station`);
    params.push(`location=${position.lat},${position.lng}`);
    params.push(`rankby=distance`);
    params.push(`key=${ENV.GOOGLE_PLACES_API_KEY}`);
    const url = `${BASE_URL}?${params.join('&')}`;
    return url;
}

module.exports = GoogleGasStations;
