const terms = require('./terms.json');
const config = require('./config.js');

const Vehicle = require('./lib/Vehicle.js');
const Stations = require('./lib/Stations.js');
const Settings = require('./lib/Settings.js');

const settingOptionsView = require('./views/SettingOptionsView.js');
const settingOptionCard = require('./views/SettingOptionsCard.js');
const settingsView = require('./views/SettingsView.js');
const settingsCard = require('./views/SettingsCard.js');
const stationsView = require('./views/StationsView.js');
const mainView = require('./views/MainView.js');
const mainCard = require('./views/MainCard.js');
const stationCard = require('./views/StationCard.js');
const stationModal = require('./views/StationModal.js');

/**
 * App Class
 * @class
 * @classdesc the core App logic running the show
 */
function App() {
    this.stations = new Stations();
    this.vehicle = new Vehicle();
    this.settings = new Settings();
    this.strings = undefined;

    // bind all functions
    this.load = this.load.bind(this);
    this.render = this.render.bind(this);
    this.handleSettingsReset = this.handleSettingsReset.bind(this);
    this.handleFetchStations = this.handleFetchStations.bind(this);
    this.handleStationClicked = this.handleStationClicked.bind(this);
    this.handleSettingClicked = this.handleSettingClicked.bind(this);
    this.handleSettingOptionClicked = this.handleSettingOptionClicked.bind(
        this
    );

    /** From Pre-built app - keeping */
    // Load each term into built-in flow context for Terms & Conditions.
    ngi.cards('_ngi:terms', terms);

    // Define the Splash screen.
    ngi.cards('_ngi:init.splash', {
        icon: './images/gas.png',
    });

    this.load().then(() => {
        // we need strings to be setup before load
        this.render();
        ngi.init('app');
    });
}

/**
 * Load Settings / Language Strings before first render
 */
App.prototype.load = async function () {
    await this.settings.load();
    const settingsConfig = this.settings.get();
    const strings = await this.vehicle.getStrings(settingsConfig.forceLanguage);
    this.strings = strings;
};

/**
 * Renders the main content of the app
 */
App.prototype.render = function () {
    const settingsConfig = this.settings.get();

    // Define the App Flow.
    ngi.flow('app', { entry: 'main' })
        .addRoute('main', mainView(this.strings))
        .addRoute(
            'stations',
            stationsView(this.strings, {
                onFetchStations: this.handleFetchStations,
                onStationClicked: this.handleStationClicked,
            })
        )
        .addRoute(
            'settings',
            settingsView(this.strings, {
                onResetClicked: this.handleSettingsReset,
                onSettingClicked: this.handleSettingClicked,
            })
        )
        .addRoute(
            'setting',
            settingOptionsView(this.strings, {
                onSettingOptionClicked: this.handleSettingOptionClicked,
            })
        );

    // Add Cards
    ngi.cards('app.main', mainCard(this.strings));
    ngi.cards(
        'app.settings',
        Object.keys(settingsConfig).map((key) => {
            return settingsCard(this.strings, {
                key: key,
            });
        })
    );
};

/**
 * Fetches gas stations close by the vehicle, ordered by distance, and then renders
 * them to cards on the gas.stations route.
 */
App.prototype.handleFetchStations = async function () {
    const position = await this.vehicle.getCurrentPosition();
    const settingsConfig = this.settings.get();
    const units = settingsConfig.units;
    let stations = await this.stations.fetch(position, settingsConfig);
    const useMiles = units === 'miles';
    const stationCards = stations.map(function (station) {
        return {
            label: station.getLabel(),
            distance: station.getDistance(position, {
                useMiles: useMiles,
            }),
            position: station.getPosition(),
        };
    });
    const stationCardsOrdered = stationCards.sort((station1, station2) => {
        return station1.distance - station2.distance;
    });
    ngi.state.set('stations', stationCardsOrdered);
    ngi.cards(
        'app.stations',
        stationCardsOrdered.map((station) => {
            return stationCard(this.strings, {
                label: station.label,
                distance: station.distance,
                units: units,
            });
        }),
        true
    );
};

/**
 * sets the setting state and renders the setting options of that setting on the fly
 * @param {string} key - the key of setting that was clicked
 */
App.prototype.handleSettingClicked = function (key) {
    ngi.state.set('setting', key);
    const setting = key;
    const settingsConfig = this.settings.get();
    const selectedOption = settingsConfig[setting];
    const options = config[setting].options;
    ngi.cards(
        'app.setting',
        options.map((option) => {
            return settingOptionCard(this.strings, {
                key: option,
                setting: setting,
                selected: selectedOption === option,
            });
        }),
        true
    );
};

/**
 * resets the settings and the does an app refresh because we
 * can't be sure __right now__ that they did not select a language
 * setting, which we need to totally refresh the app for
 */
App.prototype.handleSettingsReset = async function () {
    await this.settings.reset();
    // we don't know if this is a language reset so restart
    ngi.restart();
};

/**
 * sets a setting option and saves the settings file
 * @param {string} key - the key of the setting option
 */
App.prototype.handleSettingOptionClicked = async function (key) {
    const setting = ngi.state.get('setting');
    this.settings.set(setting, key);
    await this.settings.save();
    if (setting === 'forceLanguage') {
        ngi.restart();
    }
};

/**
 * Callback for when a user select a station, pop-ups open a modal for the user to decide if they want to navigate to the gas station
 * @param {number} index - index of the station in the stations state list // could be improved to use something more reliable like a key
 */
App.prototype.handleStationClicked = function (index) {
    const settingsConfig = this.settings.get();
    const units = settingsConfig.units;
    const stations = ngi.state.get('stations');
    const selectedStation = stations[index];
    ngi.modal.load(
        stationModal(this.strings, {
            label: selectedStation.label,
            distance: selectedStation.distance,
            units: units,
            onRouteToClicked: () => {
                this.vehicle.setDestinations(selectedStation.position);
            },
        })
    );
};

const app = new App();
