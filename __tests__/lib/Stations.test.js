const Stations = require('../../src/lib/Stations');

describe('Strings', () => {
    test('constructs', () => {
        const stations = new Stations();
    });

    test('fetch', async (resolve) => {
        const stations = new Stations();
        const googleSpy = jest
            .spyOn(stations.googleGasStations, 'fetch')
            .mockImplementation(async () => {
                return;
            });
        const alternativeSpy = jest
            .spyOn(stations.alternativeGasStations, 'fetch')
            .mockImplementation(async () => {
                return;
            });

        // this is not important for this test, just a placeholder
        const position = {
            lat: 0,
            lng: 0,
        };

        // should call google if not arguments provided
        await stations.fetch(position);
        expect(googleSpy).toBeCalledTimes(1);
        expect(alternativeSpy).toBeCalledTimes(0);

        await stations.fetch(position, { fuelType: 'GAS' });
        expect(googleSpy).toBeCalledTimes(2);
        expect(alternativeSpy).toBeCalledTimes(0);

        // alternative types should be routed to alternative
        await stations.fetch(position, { fuelType: 'ELEC' });
        expect(googleSpy).toBeCalledTimes(2);
        expect(alternativeSpy).toBeCalledTimes(1);

        resolve();
    });
});
