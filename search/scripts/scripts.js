var x = document.getElementById("demo");
//var location;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    /*
    location = { 
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
    console.log(location.latitude);
    console.log(location.longitude);
    */
}