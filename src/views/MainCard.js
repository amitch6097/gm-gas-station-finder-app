const Strings = require('../lib/Strings');

/**
 * Renders the main card, which houses really the "view" aspects of main, see mainView for routing
 * @param {Strings} strings
 * @param {{}} props
 */
function mainCard(strings, props = {}) {
    return {
        title: strings.get('mainCard.title'),
        images: ['./images/gas.png'],
        body: strings.get('mainCard.body'),
    };
}
module.exports = mainCard;
