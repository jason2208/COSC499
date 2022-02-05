function createMap() {
  console.log("hi mom!");

	var toronto = {lat: 43.6532, lng:  -79.3832};

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: toronto
    });

  console.log("Pie");
    var marker = new google.maps.Marker({
      position: toronto,
      map: map
    });
    console.log("Pie");
    var data = JSON.parse(document.getElementById('data').innerHTML);
        mapHealers(data);
        console.log("done : - )");

        console.log(data);

        }

        function mapHealers(data) {

        	Array.prototype.forEach.call(data, function(data){

        		var marker = new google.maps.Marker({
        	      position: new google.maps.LatLng(data.lat, data.lng),
        	      map: map

        	    });

        	    })
        	}
