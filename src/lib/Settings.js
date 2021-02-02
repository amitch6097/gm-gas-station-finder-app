require('../typdef');
const config = require('../config.js');
const USER_CONFIG_FILE = 'user_config.json';

/**
 * Settings Class
 * @class
 * @classdesc An interface to interact with settings of the application through, settings presist through saving a local json file
 */
function Settings() {
    /**
     * @private {SettingsData}
     */
    this._config = config.defaultSettings;
}

/**
 * @returns {SettingsData}
 */
Settings.prototype.get = function () {
    return this._config;
};

/**
 * Sets a value in the settings;
 * @param {keyof SettingsData} key
 * @param {SettingsData[key]} value
 */
Settings.prototype.set = function (key, value) {
    this._config[key] = value;
};

/**
 * loads the user settings file from io
 */
Settings.prototype.load = async function () {
    const json = await _loadJSONFile(USER_CONFIG_FILE);
    this._config = json || config.defaultSettings;
};

/**
 * saves the user settings file to io
 */
Settings.prototype.save = async function () {
    _saveJSONFile(USER_CONFIG_FILE, this._config);
};

/**
 * sets settings back to default and deletes the settings file
 */
Settings.prototype.reset = async function () {
    this._config = config.defaultSettings;
    await _deleteFile(USER_CONFIG_FILE);
};

/**
 * @param {string} path - path of JSON file to load
 */
async function _loadJSONFile(path) {
    try {
        const file = await new Promise((resolve, reject) =>
            gm.io.readFile(resolve, reject, path)
        );
        const json = JSON.parse(file);
        return json;
    } catch (err) {
        console.warn(err);
        return undefined;
    }
}

/**
 * @param {string} path - path of JSON file to save to
 * @param {object} json - object to save
 */
async function _saveJSONFile(path, json) {
    try {
        const str = JSON.stringify(json);
        const response = await new Promise((resolve, reject) =>
            gm.io.writeFile(resolve, reject, path, str)
        );
    } catch (error) {
        console.warn('Could not save file with error: ', error);
    }
}

/**
 * @param {string} path - path of JSON file to delete
 */
async function _deleteFile(path) {
    try {
        const response = await new Promise((resolve, reject) =>
            gm.io.deleteFile(resolve, reject, path)
        );
    } catch (error) {
        console.warn('Could not save file with error: ', error);
    }
}

module.exports = Settings;
