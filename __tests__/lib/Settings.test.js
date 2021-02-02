const Settings = require('../../src/lib/Settings');
const config = require('../../src/config.js');

describe('Settings', () => {
    test('constructs', () => {
        const settings = new Settings();
    });

    test('get', () => {
        const settings = new Settings();
        const settingsConfig = settings.get();
        expect(settingsConfig.fuelType).toEqual(config.defaultSettings.fuelType);
    });


});