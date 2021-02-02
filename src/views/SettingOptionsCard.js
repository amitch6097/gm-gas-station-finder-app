const Strings = require('../lib/Strings');

/**
 * @typedef SettingCardProps
 * @type {object}
 * @property {string} key - unique key to identify the setting by
 * @property {string} setting - the unique setting this option is apart of
 * @property {string} selected - if the option is selected, if so we will put a check mark next to it
 */

/**
 * Renders the setting option card
 * @param {Strings} strings
 * @param {SettingOptionCardProps} props
 */
function settingOptionCard(strings, props = {}) {
    const key = props.key;
    const setting = props.setting;
    const selected = props.selected;

    return {
        $key: key,
        body: strings.get(`settings.${setting}.${key}`),
        title: strings.get(`settings.${setting}.${key}`),
        icon: selected ? './images/check_mark.png' : undefined,
    };
}

module.exports = settingOptionCard;
