const Strings = require('../lib/Strings');

/**
 * @typedef StationsViewProps
 * @type {object}
 * @property {(index: number) => void)} onStationClicked - callback for when the user clicks a gas station
 * @property {() => Promise<void>)} onFetchStations - callback to load the gas stations close to the vehicle
 */

/**
 * Renders the  stations view which shows a list of gas stations close to the vehicle
 * @param {Strings} strings
 * @param {StationsViewProps} props
 */
function stationsView(strings, props = {}) {
    function handleStationClicked(index) {
        if (props.onStationClicked) {
            props.onStationClicked(index);
        }
    }

    async function handleFetchStations() {
        if (props.onFetchStations) {
            await props.onFetchStations();
        }
    }

    return {
        title: strings.get('stationsView.title'),
        layout: 'VerticalList',
        listActions: [
            {
                default: true,
                action: handleStationClicked,
            },
        ],
        beforeEnter: handleFetchStations,
        links: {
            back: 'main',
            neighbors: ['main'],
        },
    };
}

module.exports = stationsView;
