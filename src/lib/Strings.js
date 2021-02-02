require('../typdef');

/**
 * Strings Class
 * @class
 * @classdesc An interface to interact with localized strings through
 * @param {Record<string, string>} string - localized string json
 */
function Strings(strings) {
    this.strings = strings;
}

/**
 * gets the localized string by key
 * @param {string} key - a specific string to get
 */
Strings.prototype.get = function (key) {
    const value = this.strings[key];
    return value;
};

module.exports = Strings;
