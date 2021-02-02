const AlternativeGasStations = require('../../src/lib/AlternativeGasStations');
const AlternativeGasStationsMock = require('../../__mock__/lib/AlternativeGasStations.mock');

describe('GoogleGasStations', () => {
    test('constructs', () => {
        const alternativeGasStations = new AlternativeGasStations();
    });

    test('fetches', async (resolve) => {
        const alternativeGasStations = new AlternativeGasStations();
        const spy = jest
            .spyOn(ngi.http, 'get')
            .mockImplementation((request) => {
                // the request should match the request mock
                expect(request).toEqual(
                    AlternativeGasStationsMock.mock_request
                );
                return { payload:  AlternativeGasStationsMock.mock_response }
            });

        const response = await alternativeGasStations.fetch(
            AlternativeGasStationsMock.mock_latlng,
            { fuelType: 'ELEC' }
        );

        // the mock function should have been called once now
        expect(spy).toBeCalledTimes(1);
        // and data should be formatted
        expect(response.map((station) => station.toJSON())).toMatchObject([
            {
                lat: 42.41423,
                lng: -83.1364,
                name: 'University of Detroit Mercy',
            },
            {
                lat: 42.395383,
                lng: -83.074263,
                name: 'DTE Energy - Caniff Service Center',
            },
            { lat: 42.371338, lng: -83.076242, name: 'BEDROCK NEW CENTER 1' },
        ]);
        resolve();
    });
});
