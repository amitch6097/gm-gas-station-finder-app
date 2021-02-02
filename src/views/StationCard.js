const Strings = require('../lib/Strings');

/**
 * @typedef StationCardProps
 * @type {object}
 * @property {string} label - the name of the gas station
 * @property {number} distance - the distance to the gas station
 * @property {string} units - the units to use when displaying the distance
 */

/**
 * Renders the station card
 * @param {Strings} strings
 * @param {StationCardProps} props
 */
function stationCard(strings, props = {}) {
    const label = props.label;
    const distance = props.distance;
    const unitString = strings.get('stationCard.unit.' + props.units);
    const title = `${label} (${distance} ${unitString})`;
    return {
        title: title,
    };
}

module.exports = stationCard;
