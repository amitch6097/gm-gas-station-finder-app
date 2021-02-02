require('../typdef');

/**
 * Station Class
 * @class
 * @classdesc A Class to interact with data for a gas station
 * @param {StationData} data - a consistent data format to use for gas station data
 */
function Station(data) {
    this._data = data;
    this.getDistance = this.getDistance.bind(this);
}

/**
 * @returns {string} - the label of the gas station
 */
Station.prototype.getLabel = function () {
    return this._data.name;
};

/**
 * @returns {LatLng} - the position of the gas station
 */
Station.prototype.getPosition = function () {
    return {
        lat: this._data.lat,
        lng: this._data.lng,
    };
};

/**
 * gets the distance from the vehiclePosition to this gas station
 * @param {LatLng} vehiclePosition - the vehicle position
 * @param {{useMiles: boolean}} options - options for getting the position
 */
Station.prototype.getDistance = function (
    vehiclePosition,
    options = { useMiles: false }
) {
    const position = this.getPosition();
    if (
        vehiclePosition.lat != null &&
        vehiclePosition.lng != null &&
        position.lat != null &&
        position.lng != null
    ) {
        const distance = getDistanceFromLatLng(
            position.lat,
            position.lng,
            vehiclePosition.lat,
            vehiclePosition.lng,
            options.useMiles
        );
        return Math.floor(distance * 100) / 100; // precision of 2
    } else {
        return undefined;
    }
};

/**
 * Returns JSON form of data, Mainly For Testings
 * @returns {StationData}
 */
Station.prototype.toJSON = function () {
    return this._data;
};

/**
 * This code was not created by Andrew Mitchell (Me)
 * Calculation provided by https://simplemaps.com/resources/location-distance
 * @param {number} lat1
 * @param {number} lng1
 * @param {number} lat2
 * @param {number} lng2
 * @param {boolean} miles
 */
function getDistanceFromLatLng(lat1, lng1, lat2, lng2, miles) {
    // miles optional
    if (typeof miles === 'undefined') {
        miles = false;
    }
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    function square(x) {
        return Math.pow(x, 2);
    }
    var r = 6371; // radius of the earth in km
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    var lat_dif = lat2 - lat1;
    var lng_dif = deg2rad(lng2 - lng1);
    var a =
        square(Math.sin(lat_dif / 2)) +
        Math.cos(lat1) * Math.cos(lat2) * square(Math.sin(lng_dif / 2));
    var d = 2 * r * Math.asin(Math.sqrt(a));
    if (miles) {
        return d * 0.621371;
    } //return miles
    else {
        return d;
    } //return km
}

module.exports = Station;
