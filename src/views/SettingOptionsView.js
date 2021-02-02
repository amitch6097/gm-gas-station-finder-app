const Strings = require('../lib/Strings');

/**
 * @typedef SettingOptionsViewProps
 * @type {object}
 * @property {(key: string, index: number) => void)} onSettingOptionClicked - callback for when a setting option is clicked
 */

/**
 * Renders the setting option view
 * @param {Strings} strings
 * @param {SettingOptionsViewProps} props
 */
function settingOptionsView(strings, props = {}) {
    function handleSettingOptionClicked(index) {
        const card = _.get(this, 'content[' + index + ']');
        const key = _.get(card, '$key');
        if (props.onSettingOptionClicked) {
            props.onSettingOptionClicked(key, index);
        }
        this.route('settings');
    }

    return {
        title: `${strings.get('settingsView.title')} > ${strings.get(
            'settingView.title'
        )}`,
        layout: 'VerticalList',
        listActions: [
            {
                default: true,
                action: handleSettingOptionClicked,
            },
        ],
        links: {
            back: 'settings',
            neighbors: ['settings'],
        },
    };
}

module.exports = settingOptionsView;
