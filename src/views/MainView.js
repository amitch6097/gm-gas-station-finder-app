const Strings = require('../lib/Strings');

/**
 * Renders the main view, which houses really the "routing" aspects of main, see mainCard for view implementations
 * @param {Strings} strings
 * @param {{}} props
 */
function mainView(strings, props = {}) {
    return {
        layout: 'Detail',
        links: {
            neighbors: ['stations', 'settings'],
            alternate: 'stations',
        },
        actions: [
            {
                label: 'Search',
                action: function () {
                    this.route('stations');
                },
            },
            {
                label: 'Settings',
                action: function () {
                    this.route('settings');
                },
            },
        ],
    };
}

module.exports = mainView;
