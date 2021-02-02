const Strings = require('../lib/Strings');

/**
 * @typedef StationModalProps
 * @type {object}
 * @property {() => void)} onRouteToClicked - callback for when the user clicks the action to navigate to the gas station
 * @property {string} label - the name of the gas station
 * @property {number} distance - the distance to the gas station
 * @property {string} units - the units to use when displaying the distance
 */

/**
 * Renders the  station modal for a user to decide if they should navigate to the gas station
 * @param {Strings} strings
 * @param {StationModalProps} props
 */
function stationModal(strings, props = {}) {
    function handleRouteToClicked() {
        if (props.onRouteToClicked) {
            props.onRouteToClicked();
        }
    }

    const label = props.label;
    const distance = props.distance;
    const unitString = strings.get('stationCard.unit.' + props.units);
    const body = `${distance} ${unitString}`;

    return {
        title: label,
        body: body,
        timeout: -1,
        actions: [
            {
                label: strings.get('stationModal.routeTo'),
                action: handleRouteToClicked,
            },
            {
                label: strings.get('stationModal.cancel'),
                action: function () {
                    this.route('stations');
                },
            },
        ],
    };
}

module.exports = stationModal;
