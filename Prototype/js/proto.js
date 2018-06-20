var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -33.918861,
            lng: 18.423300
        },
        zoom: 8
    });
    /*
                    var marker = new google.maps.Marker({
                        position: {
                            lat: -33.918861,
                            lng: 18.423300
                        }
                    });*/
    var kml = new google.maps.KmlLayer({
        url: 'https://busisile-zilwa2601.github.io/Hackathon/Prototype/',
        map: map
    });
}
