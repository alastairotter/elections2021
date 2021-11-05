<script>
  export let province
  export let arrows = true
  import { electionData } from '../datastore/election-data.js'
  import { provinceMap } from '../datastore/provinces-map.js'
  import { provinces } from '../datastore/provinces.js'
  import { map_points } from '../datastore/map-points.js'
  import { onMount } from 'svelte'
  import { municipalities } from '../datastore/municipalities.js'
  import L from 'leaflet'
  import { municipalData } from '../datastore/municipal-data.js'
  // import '../src/leaflet.pattern-src.js'
  let map
  let stripes

  export let provName
  export let coalition

  let markers
  let markersAdded = false

  $: if (markersAdded && arrows) {
    markers.addTo(map)
  }
  $: if (markersAdded && !arrows) {
    map.removeLayer(markers)
  }

  let blackArrow
  let ancArrow
  let daArrow
  let redArrow
  let greenArrow
  let blue = '#92c5de'
  let red = '#dfc27d'
  let gray = '#eee'
  let green = '#80cdc1'

  let coalitionMap
  let hungMap
  let tooltipShow = false
  let tt = ''
  let ttX = 100
  let ttY = 100

  // Set up arrows
  let ArrowIcon = L.Icon.extend({
    options: {
      iconSize: [10, 20],
      iconAnchor: [0, 5],
      popupAnchor: [-3, -76],

      className: 'arrow',
    },
  })

  blackArrow = new ArrowIcon({ iconUrl: '/images/arrow.png' })
  ancArrow = new ArrowIcon({ iconUrl: '/images/anc-arrow.png' })
  daArrow = new ArrowIcon({ iconUrl: '/images/da-arrow.png' })
  redArrow = new ArrowIcon({ iconUrl: '/images/red-arrow.png' })
  greenArrow = new ArrowIcon({ iconUrl: '/images/green-arrow.png' })

  // Set up arrows

  $: provName = provinces.filter((d) => d.code === province)[0].name

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let currentMuni = municipalities.features.filter(
    (f) => f.properties.ADM1_ID === province
  )

  let currentData = municipalData.filter((d) => d.Province === province)

  onMount(async () => {
    addMap()
  })

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: hover,
      mousemove: move,
      mouseout: out,
      click: click,
    })
  }

  function provinceStyle(feature) {
    return {
      color: '#fff',
      weight: 1,
      fillColor: 'none',
    }
  }

  function mapStyle(feature, layer) {
    let fillColor = '#f7f7f7'

    let borderColor = 'darkgray'
    return {
      color: borderColor,
      fillColor: fillColor,
      weight: 0.5,
      opacity: 1,
      fillOpacity: 1,
      apiUrl: '',
      className: 'current-muni',
    }
  }

  function countryStyle(feature) {
    let fillColor = '#eaeaea'

    let borderColor = 'lightgray'
    return {
      color: borderColor,
      fillColor: fillColor,
      weight: 0.5,
      opacity: 1,
      fillOpacity: 1,
      apiUrl: '',
    }
  }

  function coalitionStyle(feature) {
    let fillColor = 'none'
    let borderColor = 'gray'

    let c = currentData.filter(
      (d) => d.muni_code === feature.properties.ADM3_ID
    )
    if (c[0]) {
      if (c[0]['Coalitions?'] === 'Yes') {
        if (c[0]['Council run by'] === 'ANC coalition') {
          fillColor = green
          borderColor = '#fff'
        } else if (c[0]['Council run by'] === 'DA coalition') {
          fillColor = blue
          borderColor = '#fff'
        } else {
          fillColor = red
          borderColor = '#fff'
        }
      }
    }

    return {
      color: borderColor,
      fillColor: fillColor,
      weight: 0.5,
      opacity: 1,
      fillOpacity: 1,
      apiUrl: '',
      // fillPattern: stripes,
    }
  }

  function hungStyle(feature) {
    let fillColor = 'none'
    let borderColor = 'gray'
    let code = feature.properties.ADM3_ID
    let hung = electionData.filter((d) => d.muni_code === code)[0][
      '2021_council_run_by'
    ]

    fillColor = '#35978f'
    borderColor = '#fff'

    if (hung !== 'hung') {
      fillColor = 'none'
      borderColor = 'gray'
    }

    return {
      color: borderColor,
      fillColor: fillColor,
      weight: 0.5,
      opacity: 1,
      fillOpacity: 1,
      apiUrl: '',
    }
  }

  function hover(feature) {
    let code = feature.target.feature.properties.ADM3_ID
    let muniName = currentData.filter((d) => d.muni_code === code)

    let electionDetail = electionData.filter((f) => f.muni_code === code)

    if (muniName.length > 0) {
      tt = `<div class="tt-title">${muniName[0].Municipality}</div>`
      tt += `<div class="tt-description">${muniName[0]['Council run by']}</div>`
    }
    if (electionDetail.length > 0) {
      tt += `<div class="tt-crosshead">Voter Turnout</div>`
      tt += `<div class="tt-description"><span class="tt-highlight">2016</span>: ${Number(
        electionDetail[0]['2016_voter_turnout'].replace('%', '')
      ).toFixed(1)}%</div>`
      tt += `<div class="tt-description"><span class="tt-highlight">2021</span>: ${Number(
        electionDetail[0]['2021_voter_turnout'].replace('%', '')
      ).toFixed(1)}%</div>`
    }

    // tooltip.style.top = y - 5 + 'px'
    // tooltip.style.left = x + 10 + 'px'
    // tooltip.innerHTML = tt
    tooltipShow = true
  }
  function move(feature) {
    ttX = feature.originalEvent.clientX + 10
    ttY = feature.originalEvent.clientY
    // let x = feature.originalEvent.clientX
    // let y = feature.originalEvent.clientY
    // tooltip.style.top = y - 5 + 'px'
    // tooltip.style.left = x + 10 + 'px'
  }
  function out(feature) {
    // tooltip.style.left = '-1000px'
    tooltipShow = false
  }
  function click(feature) {}

  function addMap() {
    map = L.map(`map`, {
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      zoomSnap: 0.1,
    })

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
      }
    ).addTo(map)

    // stripes = new L.StripePattern({
    //   // patternContentUnits: 'objectBoundingBox',
    //   // patternUnits: 'objectBoundingBox',
    //   // weight: 0.1,
    //   // spaceWeight: 0.1,
    //   // height: 0.2,
    //   angle: 45,
    // })
    // stripes.addTo(map)

    let countryMap = L.geoJSON(provinceMap, {
      // onEachFeature: onEachFeature,
      style: countryStyle,
    }).addTo(map)

    let muniMap = L.geoJSON(currentMuni, {
      onEachFeature: onEachFeature,
      style: mapStyle,
    }).addTo(map)

    map.fitBounds(muniMap.getBounds(), { padding: [5, 5] })

    coalitionMap = L.geoJSON(currentMuni, {
      onEachFeature: onEachFeature,
      style: coalitionStyle,
    }).addTo(map)

    map.fitBounds(coalitionMap.getBounds(), { padding: [5, 5] })

    // /////////////// HUNG MAP
    hungMap = L.geoJSON(currentMuni, {
      onEachFeature: onEachFeature,
      style: hungStyle,
    }).addTo(map)

    map.fitBounds(hungMap.getBounds(), { padding: [5, 5] })
    // /////////////// HUNG MAP

    // ADD MAP POINTS
    var pointLayer = L.geoJSON(null, {
      pointToLayer: function (feature, latlng) {
        let label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
        return new L.CircleMarker(latlng, {
          radius: 2,
          className: 'pointer ' + feature.properties.class,
        })
          .bindTooltip(label, {
            permanent: true,
            direction: 'center',
            className: 'points ' + feature.properties.class,
          })
          .openTooltip()
      },
    })
    // filter out out-of-province labels
    let inProvinceLabels = map_points.features.filter(
      (d) => d.properties.class === `${province}-label`
    )

    pointLayer.addData(inProvinceLabels)

    // ADD MAP POINTS END

    // ADD MAP ARROWS
    let curItem = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [],
          },
        },
      ],
    }

    markers = L.layerGroup()

    // END MAP ARROWS

    currentMuni.forEach((c) => {
      curItem.features[0].geometry.coordinates = c.geometry.coordinates

      let markerMap = L.geoJSON(curItem, {
        style: markerStyle,
      })
      let center = markerMap.getBounds().getCenter()

      let arrow = redArrow

      let voterTurnout = 1
      let exists = false
      let code = c.properties.ADM3_ID

      // voterTurnout = electionData.filter(f => f.muni_code === code)[0].voter_difference.replace("%", "")
      if (electionData.filter((f) => f.muni_code === code).length > 0) {
        voterTurnout = electionData
          .filter((f) => f.muni_code === code)[0]
          .voter_difference.replace('%', '')
        voterTurnout = Number(voterTurnout)
        exists = true
      }
      // voterTurnout = Number(voterTurnout)
      // console.log(voterTurnout);

      // let rotate = randomInt(0, 360)

      // let rotation = 90
      if (voterTurnout > 0) {
        // rotation = 270
        arrow = greenArrow
      }

      // if(rotate < 180) {
      //   rotation = 0
      //   arrow = ancArrow
      // }
      let centerPoint = L.marker(center, {
        icon: arrow,
        // rotationAngle: rotation,
        // rotationOrigin: 'center center',
      })

      if (exists) {
        markers.addLayer(centerPoint)
      }
    })

    map.addLayer(pointLayer)
    markers.addTo(map)
    markersAdded = true

    function markerStyle(feature) {
      let fillColor = 'yellow'
      return {
        color: 'black',
        fillColor: fillColor,
        weight: 0.5,
        opacity: 1,
        fillOpacity: 1,
        apiUrl: '',
      }
    }
  }

  $: if (!coalition && map) {
    map.removeLayer(coalitionMap)
  }
  $: if (coalition && map) {
    map.addLayer(coalitionMap)
  }
</script>

{#if tooltipShow}
  <div class="tooltip" style="left: {ttX}px; top: {ttY}px;">{@html tt}</div>
{/if}
<div class="map-wrap">
  <!-- <div class="map-legend">
    <div class="map-title">{provName}</div>
    <div class="legend-icon">
      The red <img src="/images/red-arrow.png" alt="" /> and green
      <img src="/images/green-arrow.png" alt="" /> arrows indicate the change in
      voter turnout between 2016 and 2021.
    </div>
  </div> -->
  <div id="map" class="map" />
</div>

<style>
  .map {
    width: 100%;
    height: 500px;
  }
</style>
