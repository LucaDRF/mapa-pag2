function initMap(){
    var map ;
    var locations = [
        {
            name: "aderbal",
            lat: -33.890542,
            log: 151.274856
        },
        {
            name: "edmur",
            lat: -33.950198,
            log:  151.259302
        }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
    });
    locations.forEach(element => {
        var infowindow = new google.maps.InfoWindow({
            content: element.name
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(element.lat, element.log),
            map: map,
                    
            });
                // infowindow.open(map , marker)
        });
}