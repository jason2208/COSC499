function createMap() {
  console.log("hi mom!");
	var toronto = {lat: 43.6532, lng:  -79.3832};
  	var toronto = {lat: 43.6532, lng:  -79.3932};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: toronto
    });

    var marker = new google.maps.Marker({
      position: toronto,
      map: map
    });

}
