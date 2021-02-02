const Vehicle = require('../../src/lib/Vehicle');
const VehicleMock = require('../../__mock__/lib/Vehicle.mock');

describe('Vehicle', () => {
    test('constructs', () => {
        const vehicle = new Vehicle();
    });

    test('getCurrentPosition', async (resolve) => {
        const vehicle = new Vehicle();
        const spy = jest
            .spyOn(gm.info, 'getCurrentPosition')
            .mockImplementation((callback) => {
                callback(VehicleMock.mock_position)
            });
        const position = await vehicle.getCurrentPosition();
        expect(spy).toBeCalledTimes(1);
        expect(position.lat).toEqual(42.39285210000001);
        expect(position.lng).toEqual(-83.12162219999999);
        resolve();
    });
});
