const Station = require('../../src/lib/Station');

describe('Station', () => {
    test('constructs', () => {
        const station = new Station();
    });

    test('getLabel', () => {
        const name = 'my-station-test-name';
        const station = new Station({
            name,
        });
        expect(station.getLabel()).toEqual(name);
    });

    test('getPosition', () => {
        const lat = 45;
        const lng = 45;

        const station = new Station({
            lat,
            lng,
        });
        expect(station.getPosition()).toEqual({
            lat,
            lng,
        });
    });

    test('getDistance', () => {
        const station1 = new Station({
            lat: 0,
            lng: 0,
        });
        const station2 = new Station({
            lat: 45,
            lng: 45,
        });

        // calculation found at https://www.movable-type.co.uk/scripts/latlong.html
        expect(
            station1.getDistance(station2.getPosition(), { useMiles: false })
        ).toEqual(6671.69);
        // should be the same both ways
        expect(station2.getDistance(station1.getPosition())).toEqual(6671.69);

        // should work with miles
        expect(
            station2.getDistance(station1.getPosition(), { useMiles: true })
        ).toEqual(4145.59);
    });
});
