# GM Gas Finder App
![App Image](/src/images/gas_small.png)

## Goal
This app was created to get familiar with GM Drive First Framework.  You can find more information about it [here](https://developer.gm.com/docs/getting-started).

## Setup
You will need to install the GM NGI Emulator found [here](https://developer.gm.com/docs/emu-downloads). Further you will need to aquire a [Google Places API Key](https://developers.google.com/places/web-service/overview) and a [Alternative Fuel Stations API](https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/).

Next you can clone this repoistory and install the dev packages
```
npm install
```

You will need to put key in a .env.json file at the root of the project like so
```
// ./.env.json
{
    "GOOGLE_PLACES_API_KEY": "...",
    "GOV_ALTERNATIVE_FUEL_API_KEY": "..."
}
```
__I have provided these for a short period of time__

Next install the app in the NGI Emulator by going to the File > Open App and Navigating to the Folder you cloned this repository to.  You should now be able to open the App within the Emulator.

## Overview

### Main Page

The user is initially presented with the main page showing the options to tune the settings or search for gas stations.
![Main Page](/.gitimages/main.png)

### Settings Page

The user can change the following settings, language, fuel type, or units
![Settings Page](/.gitimages/settings.png)

#### Language
The app supports using the language from the English, Spanish, and French.
![Settings Page](/.gitimages/settings-language.png)

#### Fuel Type
The app supports search from a variety of alternative fuel, as well as regular gasoline. The full list can be seen in [src/config.js](/src/config.js) 
![Settings Page](/.gitimages/settings-fuel.png)

#### Units
Finally the app supports getting the distance to the gas stations in miles or kilometers
![Settings Page](/.gitimages/settings-units.png)


### Gas Stations Page

The user can search for gas stations close to the vehicle by clicking the Search button.  This will pull up a short list of local gas stations, sorted by distance.
![Settings Page](/.gitimages/stations.png)

Upon clicking on a station, the user will be given the option to navigate to that station automatically.
![Settings Page](/.gitimages/station-modal.png)






