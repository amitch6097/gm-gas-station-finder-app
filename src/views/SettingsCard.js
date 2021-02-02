const Strings = require('../lib/Strings');

/**
 * @typedef SettingsCardProps
 * @type {object}
 * @property {string} key - unique key to identify the setting by
 */

/**
 * Renders the settings card
 * @param {Strings} strings
 * @param {SettingOptionsViewProps} props
 */
function settingsCard(strings, props = {}) {
    const key = props.key;
    return {
        $key: key,
        body: strings.get(`settings.${key}`),
        title: strings.get(`settings.${key}`),
    };
}

module.exports = settingsCard;
