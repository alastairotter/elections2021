var map_points = {
  type: 'FeatureCollection',
  name: 'test-points-short-named',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [28.0416, -26.2044],
      },
      properties: {
        name: 'Johannesburg',
        class: 'GP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [27.9319, -26.6736],
      },
      properties: {
        name: 'Vereeniging',
        class: 'GP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.4167, -29.5833],
      },
      properties: {
        name: 'Pietermaritzburg',
        class: 'KZN-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [28.1881, -25.7464],
      },
      properties: {
        name: 'Pretoria',
        class: 'GP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [31.025, -29.8583],
      },
      properties: {
        name: 'Durban',
        class: 'KZN-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [18.425, -33.925],
      },
      properties: {
        name: 'Cape Town',
        class: 'WC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.7208, -27.9831],
      },
      properties: {
        name: 'Welkom',
        class: 'FS-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [27.9116, -33.0153],
      },
      properties: {
        name: 'East London',
        class: 'EC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [25.6, -33.9581],
      },
      properties: {
        name: 'Port Elizabeth',
        class: 'EC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.2167, -29.1],
      },
      properties: {
        name: 'Bloemfontein',
        class: 'FS-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [29.45, -23.9],
      },
      properties: {
        name: 'Polokwane',
        class: 'LP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.6667, -26.8667],
      },
      properties: {
        name: 'Klerksdorp',
        class: 'NW-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [27.2336, -25.6667],
      },
      properties: {
        name: 'Rustenburg',
        class: 'NW-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.7586, -28.7386],
      },
      properties: {
        name: 'Kimberley',
        class: 'NC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [22.45, -33.9667],
      },
      properties: {
        name: 'George',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [29.4783, -25.7684],
      },
      properties: {
        name: 'Middelburg',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [28.79, -31.58],
      },
      properties: {
        name: 'Umtata',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [21.2425, -28.4572],
      },
      properties: {
        name: 'Upington',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.8833, -31.9],
      },
      properties: {
        name: 'Queenstown',
        class: 'EC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [29.45, -26.45],
      },
      properties: {
        name: 'Bethal',
        class: 'MP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [19.4436, -33.645],
      },
      properties: {
        name: 'Worcester',
        class: 'WC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.52, -33.2996],
      },
      properties: {
        name: 'Grahamstown',
        class: 'EC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [29.25, -26.95],
      },
      properties: {
        name: 'Standerton',
        class: 'MP-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.4833, -22.95],
      },
      properties: {
        name: 'Thohoyandou',
        class: 'LP-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [17.9456, -32.9978],
      },
      properties: {
        name: 'Saldanha',
        class: 'WC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.5406, -32.2522],
      },
      properties: {
        name: 'Graaff-Reinet',
        class: 'EC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [22.2, -33.5833],
      },
      properties: {
        name: 'Oudtshoorn',
        class: 'NC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.4547, -30.7411],
      },
      properties: {
        name: 'Port Shepstone',
        class: 'KZN-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.7333, -26.95],
      },
      properties: {
        name: 'Vryburg',
        class: 'NW-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [29.7825, -28.5539],
      },
      properties: {
        name: 'Ladysmith',
        class: 'KZN-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [22.5833, -32.35],
      },
      properties: {
        name: 'Beaufort West',
        class: 'WC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.7, -30.7],
      },
      properties: {
        name: 'Aliwal North',
        class: 'EC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.0417, -22.3381],
      },
      properties: {
        name: 'Musina',
        class: 'LP-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [24.0167, -30.65],
      },
      properties: {
        name: 'De Aar',
        class: 'NC-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [31.4161, -28.335],
      },
      properties: {
        name: 'Ulundi',
        class: 'KZN-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [19.3, -34.4167],
      },
      properties: {
        name: 'Hermanus',
        class: 'WC-label',
      },
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [25.6442, -25.8653],
      },
      properties: {
        name: 'Mahikeng',
        class: 'NW-label',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [30.9703, -25.4745],
      },
      properties: {
        name: 'Nelspruit',
        class: 'MP-label',
      },
    },
  ],
}

export { map_points }
