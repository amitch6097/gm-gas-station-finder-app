const Strings = require('../../src/lib/Strings');
const EN_US_Strings = require('../../src/data/share/en-US/strings.json');

describe('Strings', () => {
    test('constructs', () => {
        const strings = new Strings(EN_US_Strings);
    });

    test('get', () => {
        const strings = new Strings(EN_US_Strings);
        expect(strings.get('settings.forceLanguage.en-US')).toEqual('English');
    });
});
