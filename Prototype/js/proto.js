var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -33.918861,
            lng: 18.423300
        },
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: {
            lat: -33.918861,
            lng: 18.423300
        }
    });
    var kmllayer = new google.maps.KmlLayer(
        "https://census2011.adrianfrith.com/place/199/kml", {
            map: map,
            clickable: false
        });
}
