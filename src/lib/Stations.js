require('../typdef');
const Station = require('./Station');
const GoogleGasStations = require('./GoogleGasStations');
const AlternativeGasStations = require('./AlternativeGasStations');

/**
 * Stations Class
 * @class
 * @classdesc An interface to interact with localized strings through
 */
function Stations() {
    this.googleGasStations = new GoogleGasStations();
    this.alternativeGasStations = new AlternativeGasStations();
}

/**
 * @typedef StationsFetchOptions
 * @type {object}
 * @property {string} fuelType - fuel type of the gas station you want to find
 */

/**
 * fetches gas stations from Google or Alternate Gas Stations API's respectively and returns
 * Station Classes;
 * @param {LatLng} position
 * @param {StationsFetchOptions} options
 * @returns {Promise<Station[]>}
 */
Stations.prototype.fetch = async function (position, options = {}) {
    if (options.fuelType == null || options.fuelType === 'GAS') {
        return await this.googleGasStations.fetch(position);
    } else {
        return await this.alternativeGasStations.fetch(position, options);
    }
};

module.exports = Stations;
