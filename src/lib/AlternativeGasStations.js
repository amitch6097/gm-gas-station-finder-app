require('../typdef');

const ENV = require('../../.env.json');
const Station = require('./Station');

const BASE_URL =
    'https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json';

const OPTION_MAP = {
    fuelType: 'fuel_type',
};

/**
 * @typedef AlternativeGasStationsResult
 * @type {object}
 * @property {string} station_name - the stations name.
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * @typedef AlternativeGasStationsResponse
 * @type {object}
 * @property {{fuel_stations: AlternativeGasStationsResult[]}} payload
 */

/**
 * @typedef AlternativeGasStationsFetchOptions
 * @type {object}
 * @property {string} fuelType - fuel type of the gas station you want to find
 */

/**
 * AlternativeGasStations Class
 * @class
 * @classdesc A Class to interact with the gov alternative fuel API through
 */
function AlternativeGasStations() {}

/**
 * @param {LatLng} position
 * @param {{AlternativeGasStationsFetchOptions} options
 * @returns {Promise<Station[]>}
 */
AlternativeGasStations.prototype.fetch = async function (position, options) {
    const url = buildURL(position, options);
    const response = await ngi.http.get(url);
    if (response) {
        return mapResponse(response.payload);
    } else {
        return undefined;
    }
};

/**
 * maps the response from the API to a Station Class Format
 * @param {AlternativeGasStationsResponse} response
 * @returns {Station[]}
 */
function mapResponse(response) {
    return response.fuel_stations.map(function (station) {
        return new Station({
            name: station.station_name,
            lat: station.latitude,
            lng: station.longitude,
        });
    });
}

/**
 * builds the URL with some custom parameters
 * @param {LatLng} position
 * @param {{fuelType: Array<string>}} options
 */
function buildURL(position, options = {}) {
    const params = Object.keys(options).map((key) => {
        const value = options[key];
        return `${OPTION_MAP[key]}=${value}`;
    });
    params.push(`latitude=${position.lat}`);
    params.push(`longitude=${position.lng}`);
    params.push(`limit=10`);
    params.push(`api_key=${ENV.GOV_ALTERNATIVE_FUEL_API_KEY}`);
    const url = `${BASE_URL}?${params.join('&')}`;
    return url;
}

module.exports = AlternativeGasStations;
