import mapboxgl from 'mapbox-gl';
import buildings from './merged_building.json';

mapboxgl.accessToken = "pk.eyJ1IjoieTBneiIsImEiOiJjaW9scWxsNzIwMDMxdzVtNm56MHhweGdjIn0.XrmaYtqwrszezXe9y-gBuw";
const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-2.3629, 51.383],
    zoom: 14,
    pitch: 45,
    bearing: 0,
    container: 'map'
});

map.on('load', function() {

    map.addLayer({
        "id": "park-boundary",
        "type": "fill-extrusion",
        "source": {
            "type": "geojson",
            "data": buildings
        },
        'paint': {
            'fill-extrusion-color': {
                property: 'color_wheelchair',
                'type': 'identity'
            },
            'fill-extrusion-height': {
                'property': 'wheelchair',
                'type': 'identity'
            },
            'fill-extrusion-base': {
                'property': '0',
                'type': 'identity'
            },
            'fill-extrusion-opacity': 0.4
        }
    });
});



