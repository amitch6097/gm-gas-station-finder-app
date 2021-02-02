const mock_latlng = {
    lat: -33.8670522,
    lng: 151.1957362,
};
const mock_request =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=gas_station&location=-33.8670522,151.1957362&rankby=distance&key=AIzaSyBAEeDyDkDUACNZ7YDdDuOwItQayCCLfZg';
const mock_response = {
    html_attributions: [],
    results: [
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.86511469999999,
                    lng: 151.2068345,
                },
                viewport: {
                    northeast: {
                        lat: -33.8637289197085,
                        lng: 151.2081859802915,
                    },
                    southwest: {
                        lat: -33.8664268802915,
                        lng: 151.2054880197085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
            name: 'Shell House',
            place_id: 'ChIJF2CyBUGuEmsRX8R7md3urGo',
            plus_code: {
                compound_code: '46M4+XP Sydney NSW, Australia',
                global_code: '4RRH46M4+XP',
            },
            rating: 5,
            reference: 'ChIJF2CyBUGuEmsRX8R7md3urGo',
            scope: 'GOOGLE',
            types: ['gas_station', 'point_of_interest', 'establishment'],
            user_ratings_total: 1,
            vicinity: 'Margaret Street, Sydney',
        },
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.87292939999999,
                    lng: 151.2049363,
                },
                viewport: {
                    northeast: {
                        lat: -33.8715459197085,
                        lng: 151.2063688302915,
                    },
                    southwest: {
                        lat: -33.87424388029149,
                        lng: 151.2036708697085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
            name: '7-Eleven Kent St',
            opening_hours: {
                open_now: true,
            },
            photos: [
                {
                    height: 2448,
                    html_attributions: [
                        '<a href="https://maps.google.com/maps/contrib/105650652782952614477">Andrew Parry</a>',
                    ],
                    photo_reference:
                        'ATtYBwLnia_1-LpSvpMC4xpEhzQ6ap_0sal4mNWQDWyYKhOIKZTPCdq7fpffeUHPByEzsTkeinzN_8hWeSAu6F0xWN01uRoIQ1cY9_-ZzSUkMqnJjo7W6QxrBu22OYuciZjWXJdJQwHPqW8Qg9BeYQO1K0KSZmPAwmIyKLpqNbPd6D7nSxRF',
                    width: 3264,
                },
            ],
            place_id: 'ChIJM7O2AzyuEmsRzym9uAUoFJA',
            plus_code: {
                compound_code: '46G3+RX Sydney NSW, Australia',
                global_code: '4RRH46G3+RX',
            },
            rating: 3.2,
            reference: 'ChIJM7O2AzyuEmsRzym9uAUoFJA',
            scope: 'GOOGLE',
            types: [
                'convenience_store',
                'gas_station',
                'bakery',
                'restaurant',
                'food',
                'point_of_interest',
                'store',
                'establishment',
            ],
            user_ratings_total: 30,
            vicinity: '465 Kent Street, Sydney',
        },
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.8813918,
                    lng: 151.1967783,
                },
                viewport: {
                    northeast: {
                        lat: -33.88015376970849,
                        lng: 151.1981419802915,
                    },
                    southwest: {
                        lat: -33.88285173029149,
                        lng: 151.1954440197085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
            name: 'Shell',
            photos: [
                {
                    height: 1440,
                    html_attributions: [
                        '<a href="https://maps.google.com/maps/contrib/102057928930831231980">Paul Castle Dine</a>',
                    ],
                    photo_reference:
                        'ATtYBwLZI8YkNPbHdIbaa6S3Vk4woD5y_CHvrow_2c4F0dfNTUaRGjMeTALmbT9H-lh_sh7ssmekLMLyTW0o-tRTiM71AyEuBInGmMZueXRnoOs-gT2dMb4-kEwm5wRUdYGSXjGCp7LiK5qZZBlho-8q_mbZuM3kxy4gOwAgCN4tGsYD85LW',
                    width: 2560,
                },
            ],
            place_id: 'ChIJB3tAySiuEmsRjD3H8Tc7MMk',
            plus_code: {
                compound_code: '459W+CP Ultimo NSW, Australia',
                global_code: '4RRH459W+CP',
            },
            price_level: 2,
            rating: 3.4,
            reference: 'ChIJB3tAySiuEmsRjD3H8Tc7MMk',
            scope: 'GOOGLE',
            types: [
                'gas_station',
                'atm',
                'convenience_store',
                'finance',
                'food',
                'point_of_interest',
                'store',
                'establishment',
            ],
            user_ratings_total: 17,
            vicinity: '387-427 Wattle Street, Kelly Street, Ultimo',
        },
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.8814836,
                    lng: 151.1966757,
                },
                viewport: {
                    northeast: {
                        lat: -33.88020471970849,
                        lng: 151.1980371302915,
                    },
                    southwest: {
                        lat: -33.88290268029149,
                        lng: 151.1953391697085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/gas_station-71.png',
            name: 'Shell Coles Express Ultimo',
            opening_hours: {
                open_now: true,
            },
            photos: [
                {
                    height: 3024,
                    html_attributions: [
                        '<a href="https://maps.google.com/maps/contrib/116770715597205610473">Rory McLornan</a>',
                    ],
                    photo_reference:
                        'ATtYBwKr62Vt4OcmKoIl82a2qjpZbr90lMswTOpUpgYJCBk5muonH3oqjiWiYn-usU4yX4lWwDhEG29xtyYAhae-q4Cj06wd3LKhdmKgWKnRtu0IQtRgw0sg2zSJO1IzmETSJe5tZfWPw6Z5CsMEGRsNmtIU7tHdkJLrjVFian15VHMZWgDA',
                    width: 4032,
                },
            ],
            place_id: 'ChIJ1dZqySiuEmsRXYAxQowoito',
            plus_code: {
                compound_code: '459W+CM Ultimo NSW, Australia',
                global_code: '4RRH459W+CM',
            },
            rating: 3.7,
            reference: 'ChIJ1dZqySiuEmsRXYAxQowoito',
            scope: 'GOOGLE',
            types: [
                'gas_station',
                'convenience_store',
                'food',
                'point_of_interest',
                'store',
                'establishment',
            ],
            user_ratings_total: 170,
            vicinity: '387-427 Wattle (Corner, Kelly Street, Ultimo',
        },
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.8788554,
                    lng: 151.2075919,
                },
                viewport: {
                    northeast: {
                        lat: -33.87746971970851,
                        lng: 151.2087622802915,
                    },
                    southwest: {
                        lat: -33.8801676802915,
                        lng: 151.2060643197085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
            name: '7-Eleven 414 Pitt Street',
            opening_hours: {
                open_now: true,
            },
            photos: [
                {
                    height: 5312,
                    html_attributions: [
                        '<a href="https://maps.google.com/maps/contrib/100065741663239639061">Lord Christopher John Fuller</a>',
                    ],
                    photo_reference:
                        'ATtYBwKlJjT00aJl7XBRs3Dwls3_9xYHjcarbsSkKyoeqyxi5uPGf7FVz6zc-wGwi327r9nya2r8C0ZrYfCNN0RZZA_RDw8MriI--p98lYM-_LovYqIs6q4_WASRIAo6GCCGPZVj_KGIwv-IEhXtbOWGcmboGyR_QhsRPIWb8XmWFDLQjxYo',
                    width: 2988,
                },
            ],
            place_id: 'ChIJacIJ1iKuEmsRWDzmXDM7T8U',
            plus_code: {
                compound_code: '46C5+F2 Sydney NSW, Australia',
                global_code: '4RRH46C5+F2',
            },
            rating: 2.3,
            reference: 'ChIJacIJ1iKuEmsRWDzmXDM7T8U',
            scope: 'GOOGLE',
            types: [
                'convenience_store',
                'atm',
                'gas_station',
                'bakery',
                'finance',
                'restaurant',
                'food',
                'point_of_interest',
                'store',
                'establishment',
            ],
            user_ratings_total: 15,
            vicinity: '414 Pitt Street, Sydney',
        },
        {
            business_status: 'OPERATIONAL',
            geometry: {
                location: {
                    lat: -33.8823658,
                    lng: 151.2067611,
                },
                viewport: {
                    northeast: {
                        lat: -33.8808995197085,
                        lng: 151.2082018302915,
                    },
                    southwest: {
                        lat: -33.88359748029149,
                        lng: 151.2055038697085,
                    },
                },
            },
            icon:
                'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
            name: '7-Eleven Central Station',
            opening_hours: {
                open_now: true,
            },
            photos: [
                {
                    height: 5312,
                    html_attributions: [
                        '<a href="https://maps.google.com/maps/contrib/100065741663239639061">Lord Christopher John Fuller</a>',
                    ],
                    photo_reference:
                        'ATtYBwKEqKimwHKdWQSt9V-ZpxZcaUAXNe9Gj-mh5v44MfGbqITBpcTv2S5Pved8HVfJEau0dIT1_NUMe1-SVxD7WqWRo5-nmsBKOFXDht3T7HzKyL3bhEdvHAuVswdtoDWTDxc7c7-bKacwqh9ElP3BrDzfZyMbw5_pRFQpMM-Nc8Mq-dUT',
                    width: 2988,
                },
            ],
            place_id: 'ChIJh8xJyiOuEmsR0tfZt8UR-ew',
            plus_code: {
                compound_code: '4694+3P Haymarket NSW, Australia',
                global_code: '4RRH4694+3P',
            },
            rating: 2.3,
            reference: 'ChIJh8xJyiOuEmsR0tfZt8UR-ew',
            scope: 'GOOGLE',
            types: [
                'convenience_store',
                'gas_station',
                'bakery',
                'restaurant',
                'food',
                'point_of_interest',
                'store',
                'establishment',
            ],
            user_ratings_total: 27,
            vicinity: 'Central Station Shop, 1 Eddy Avenue, Sydney',
        },
    ],
    status: 'OK',
};

module.exports = {
    mock_latlng,
    mock_request,
    mock_response,
};
