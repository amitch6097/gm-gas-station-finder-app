const GoogleGasStations = require('../../src/lib/GoogleGasStations');
const GoogleGasStationsMock = require('../../__mock__/lib/GoogleGasStations.mock');

describe('GoogleGasStations', () => {
    test('constructs', () => {
        const googleGasStations = new GoogleGasStations();
    });

    test('fetches', async (resolve) => {
        const googleGasStations = new GoogleGasStations();
        const spy = jest
            .spyOn(ngi.http, 'get')
            .mockImplementation((request) => {
                // the request should match the request mock
                expect(request).toEqual(GoogleGasStationsMock.mock_request);
                return { payload: GoogleGasStationsMock.mock_response };
            });
        const response = await googleGasStations.fetch(
            GoogleGasStationsMock.mock_latlng
        );

        // the mock function should have been called once now
        expect(spy).toBeCalledTimes(1);
        // and data should be formatted
        expect(response.map((station) => station.toJSON())).toMatchObject([
            { name: 'Shell House', lat: -33.86511469999999, lng: 151.2068345 },
            {
                name: '7-Eleven Kent St',
                lat: -33.87292939999999,
                lng: 151.2049363,
            },
            { name: 'Shell', lat: -33.8813918, lng: 151.1967783 },
            {
                name: 'Shell Coles Express Ultimo',
                lat: -33.8814836,
                lng: 151.1966757,
            },
            {
                name: '7-Eleven 414 Pitt Street',
                lat: -33.8788554,
                lng: 151.2075919,
            },
            {
                name: '7-Eleven Central Station',
                lat: -33.8823658,
                lng: 151.2067611,
            },
        ]);
        resolve();
    });
});
