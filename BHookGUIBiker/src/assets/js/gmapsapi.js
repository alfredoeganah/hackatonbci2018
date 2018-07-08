var googleApiLoaded = false;
function initializeGoogleAPI() {
    if(googleApiLoaded) return;
    var googleApiLoaded = true;
    console.log("initializeGoogleAPI");
    var input = document.getElementById('bhook-reserva-gmapssearch');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
   
        var place = autocomplete.getPlace();

            var lat = document.getElementById('bhook-destination-latitude');
            if(lat!==undefined)lat.value = place.geometry.location.lat();
            var lon = document.getElementById('bhook-destination-longitude');
            if(lon!=undefined)lon.value = place.geometry.location.lng();

    });
}

