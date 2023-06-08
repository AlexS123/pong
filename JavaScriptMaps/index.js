let map;
let lat;
let long;

navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position)
{
    lat = position.coords.latitude;
    long = position.coords.longitude;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: long },
        zoom: 15,
    });
}


