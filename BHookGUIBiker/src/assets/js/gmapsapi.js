var googleApiLoaded = false;
function initializeGoogleAPI() {
    if(googleApiLoaded) return;
    var googleApiLoaded = true;
    console.log("initializeGoogleAPI");
    var input = document.getElementById('taxiamb-reserva-gmapssearch');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        document.getElementById('taxiamb-reserva-warning').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr').innerHTML = '';
        document.getElementById('taxiamb-reserva-addr').value = '';
        document.getElementById('taxiamb-reserva-lat').value = '';
        document.getElementById('taxiamb-reserva-lng').value = '';
        document.getElementById('taxiamb-reserva-fulllat').innerHTML = '';
        document.getElementById('taxiamb-reserva-fulllong').innerHTML = '';
        var place = autocomplete.getPlace();
        if (place.address_components[place.address_components.length-1].long_name!=='Chile'){
        document.getElementById('taxiamb-reserva-warning').innerHTML = 'La dirección debe ser de Chile';  
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
        document.getElementById('taxiamb-reserva-fulllong').innerHTML = place.geometry.location.lng();
        }
    });

    var input1 = document.getElementById('taxiamb-reserva-gmapssearch1');
    var autocomplete1 = new google.maps.places.Autocomplete(input1);
    google.maps.event.addListener(autocomplete1, 'place_changed', function () {
        document.getElementById('taxiamb-reserva-warning1').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr1').innerHTML = '';
        document.getElementById('taxiamb-reserva-addr1').value = '';
        document.getElementById('taxiamb-reserva-lat1').value = '';
        document.getElementById('taxiamb-reserva-lng1').value = '';
        document.getElementById('taxiamb-reserva-fulllat1').innerHTML = '';
        document.getElementById('taxiamb-reserva-fulllong1').innerHTML = '';
        var place = autocomplete1.getPlace();
        if (place.address_components[place.address_components.length-1].long_name!=='Chile'){
        document.getElementById('taxiamb-reserva-warning1').innerHTML = 'La dirección debe ser de Chile';  
        } else if (place.address_components[place.address_components.length-2].long_name!=='Región Metropolitana'){
        document.getElementById('taxiamb-reserva-warning1').innerHTML = 'La dirección debe ser de la Región Metropolitana>';  
        } else if (place.types[0]!=='street_address'){
        document.getElementById('taxiamb-reserva-warning1').innerHTML = 'La dirección debe contener Calle, Número y Comuna';  
        } else {
        document.getElementById('taxiamb-reserva-warning1').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr1').innerHTML = place.formatted_address;
        document.getElementById('taxiamb-reserva-addr1').value = place.formatted_address;
        document.getElementById('taxiamb-reserva-lat1').value = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-lng1').value = place.geometry.location.lng();
        document.getElementById('taxiamb-reserva-fulllat1').innerHTML = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-fulllong1').innerHTML = place.geometry.location.lng();
        }
    });

    var input2 = document.getElementById('taxiamb-reserva-gmapssearch2');
    var autocomplete2 = new google.maps.places.Autocomplete(input2);
    google.maps.event.addListener(autocomplete2, 'place_changed', function () {
        document.getElementById('taxiamb-reserva-warning2').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr2').innerHTML = '';
        document.getElementById('taxiamb-reserva-addr2').value = '';
        document.getElementById('taxiamb-reserva-lat2').value = '';
        document.getElementById('taxiamb-reserva-lng2').value = '';
        document.getElementById('taxiamb-reserva-fulllat2').innerHTML = '';
        document.getElementById('taxiamb-reserva-fulllong2').innerHTML = '';
        var place = autocomplete2.getPlace();
        if (place.address_components[place.address_components.length-1].long_name!=='Chile'){
        document.getElementById('taxiamb-reserva-warning2').innerHTML = 'La dirección debe ser de Chile';  
        } else if (place.address_components[place.address_components.length-2].long_name!=='Región Metropolitana'){
        document.getElementById('taxiamb-reserva-warning2').innerHTML = 'La dirección debe ser de la Región Metropolitana>';  
        } else if (place.types[0]!=='street_address'){
        document.getElementById('taxiamb-reserva-warning2').innerHTML = 'La dirección debe contener Calle, Número y Comuna';  
        } else {
        document.getElementById('taxiamb-reserva-warning2').innerHTML = '';  
        document.getElementById('taxiamb-reserva-fulladdr2').innerHTML = place.formatted_address;
        document.getElementById('taxiamb-reserva-addr2').value = place.formatted_address;
        document.getElementById('taxiamb-reserva-lat2').value = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-lng2').value = place.geometry.location.lng();
        document.getElementById('taxiamb-reserva-fulllat2').innerHTML = place.geometry.location.lat();
        document.getElementById('taxiamb-reserva-fulllong2').innerHTML = place.geometry.location.lng();
        }
    });

}

//google.maps.event.addDomListener(window, 'load', initialize); 
