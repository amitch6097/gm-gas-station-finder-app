require('../typdef');
const Strings = require('./strings.js');

/**
 * Vehicle Class
 * @class
 * @classdesc An interface to interact with the vehicle / gm API through
 */
function Vehicle() {}

/**
 * Gets the current lat / lng of the vehicle
 * @returns {Promse<LatLng>}
 */
Vehicle.prototype.getCurrentPosition = async function () {
    const position = await new Promise((resolve) =>
        gm.info.getCurrentPosition(resolve, true)
    );
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    return {
        lat,
        lng,
    };
};

/**
 * Gets the current language ISO code of the vehicle
 * @param {string} forceLanguage - an ISO code to force load the strings of, used by settings
 * @returns {Promse<string>}
 */
Vehicle.prototype.getStrings = async function (forceLanguage = 'none') {
    let languageIsoCode;

    if (forceLanguage !== 'none') {
        languageIsoCode = forceLanguage;
    } else {
        const vehicleConfig = await new Promise((resolve) =>
            gm.info.getVehicleConfiguration(resolve)
        );
        const languageCodeIndex = vehicleConfig.language;
        languageIsoCode =
            languageCodeIndex != null
                ? gm.constants.language[languageCodeIndex]
                : 'en-US';
    }

    const json = await new Promise((resolve) =>
        gm.io.readFile(resolve, languageIsoCode + '/strings.json')
    );
    const strings = JSON.parse(json);
    return new Strings(strings);
};

/**
 * @param {LatLng} position - the position in lat and lng to set the vehicle to
 * @returns {Promse<boolean>} - if it failed to set the destination
 */
Vehicle.prototype.setDestinations = async function (position) {
    try {
        const response = await new Promise((resolve, reject) =>
            gm.nav.setDestination(
                resolve,
                reject,
                {
                    latitude: position.lat,
                    longitude: position.lng,
                },
                true
            )
        );
        return true;
    } catch (err) {
        console.warn(err);
        return false;
    }
};

module.exports = Vehicle;
