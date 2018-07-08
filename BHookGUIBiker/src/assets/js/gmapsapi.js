var googleApiLoaded = false;
function initializeGoogleAPI() {
    if(googleApiLoaded) return;
    var googleApiLoaded = true;
    console.log("initializeGoogleAPI");
    var input = document.getElementById('bhook-reserva-gmapssearch');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
    /*    document.getElementById('taxiamb-reserva-warning').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr').innerHTML = '';
        document.getElementById('taxiamb-reserva-addr').value = '';
        document.getElementById('taxiamb-reserva-lat').value = '';
        document.getElementById('taxiamb-reserva-lng').value = '';
        document.getElementById('taxiamb-reserva-fulllat').innerHTML = '';
        document.getElementById('taxiamb-reserva-fulllong').innerHTML = '';*/
        var place = autocomplete.getPlace();
       // if (place.address_components[place.address_components.length-1].long_name!=='Chile'){

            document.getElementById('bhook-destination-latitude').value = place.geometry.location.lat();
            document.getElementById('bhook-destination-longitude').value = place.geometry.location.lng();

  /*      document.getElementById('taxiamb-reserva-warning').innerHTML = 'La dirección debe ser de Chile';  
        } else if (place.address_components[place.address_components.length-2].long_name!=='Región Metropolitana'){
        document.getElementById('taxiamb-reserva-warning').innerHTML = 'La dirección debe ser de la Región Metropolitana>';  
        } else if (place.types[0]!=='street_address'){
        document.getElementById('taxiamb-reserva-warning').innerHTML = 'La dirección debe contener Calle, Número y Comuna';  
        } else {
        document.getElementById('taxiamb-reserva-warning').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr').innerHTML = place.formatted_address;
        document.getElementById('taxiamb-reserva-addr').value = place.formatted_address;
        document.getElementById('taxiamb-reserva-lat').value = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-lng').value = place.geometry.location.lng();
        document.getElementById('taxiamb-reserva-fulllat').innerHTML = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-fulllong').innerHTML = place.geometry.location.lng();*/
   //     }
    });
}

//google.maps.event.addDomListener(window, 'load', initialize); 
