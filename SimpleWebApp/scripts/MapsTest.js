$(document).ready(doOnLoad);


function doOnLoad() {
    initMap();
    findLocation();

}

function initMap() {

    L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
    window.map = L.mapbox.map('map', 'mapbox.streets')
                //.setView([29, -26], 2)
                //.addControl(L.mapbox.geocoderControl('mapbox.places', {autocomplete: true}))
}

function findLocation() {
    window.geocoder = L.mapbox.geocoder('mapbox.places')
    geocoder.query('504 Rathbun Ave, Staten Island, NY 10312', showMap);
}

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
        dropMarker(data.latlng[0], data.latlng[1]);
    }

    
}

function dropMarker(lat, lng) {

    // L.marker is a low-level marker constructor in Leaflet.
    var marker = L.marker([lat, lng], {
        icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': '',
            'marker-color': '#fa0'
        })
    }).addTo(map);

    marker.on('click', function () {alert('foo')})
}
