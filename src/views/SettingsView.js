const Strings = require('../lib/Strings');

/**
 * @typedef SettingsViewProps
 * @type {object}
 * @property {(key: string, index: number) => void)} onSettingClicked - callback for when a setting is clicked
 * @property {() => void)} onResetClicked - callback for when the reset button is clicked
 */

/**
 * Renders the settings view
 * @param {Strings} strings
 * @param {SettingsViewProps} props
 */
function settingsView(strings, props = {}) {
    function handleSettingClicked(index) {
        const card = _.get(this, 'content[' + index + ']');
        const key = _.get(card, '$key');
        if (props.onSettingClicked) {
            props.onSettingClicked(key, index);
        }
        this.route('setting');
    }

    function handleResetClicked() {
        if (props.onResetClicked) {
            props.onResetClicked();
        }
    }

    return {
        title: strings.get('settingsView.title'),
        layout: 'VerticalList',
        actions: [
            {
                label: 'Reset',
                action: handleResetClicked,
            },
        ],
        listActions: [
            {
                default: true,
                action: handleSettingClicked,
            },
        ],
        links: {
            back: 'main',
            neighbors: ['main', 'setting'],
        },
    };
}

module.exports = settingsView;
