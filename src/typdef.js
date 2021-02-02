/**
 * @typedef StationData
 * @type {object}
 * @property {string} name
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef LatLng
 * @type {object}
 * @property {number} lat - latitude
 * @property {number} lng - longitude
 */

/**
 * @typedef SettingsData
 * @type {object}
 * @property {'none' | 'en-US' |  'es-US' |  'fr-CA'} forceLanguage - a language to force the application to use / mainly for testing
 * @property {'GAS' | 'BD' | 'CNG' | 'ELEC' | 'E85' | 'HY' | 'LNG'| 'LPG'} fuelType - fuel type to find gas stations for
 * @property {"kilometers" | "miles"} units - units to find distance in
 */
