<!DOCTYPE html>
<html>
<head>
	<title>Google Maps API TEST</title>
	<script type="text/javascript" src="googleMaps.js"></script>
	<style type="text/css">
		.container {
			height: 450px;
		}
		#map {
			width: 100%;
			height: 100%;
			border: 1px solid blue;
		}
		#data, #allData {
			display: none;
		}
	</style>
</head>
<body>
	<div class="container">
		<center><h1>Google Maps API TEST</h1></center>
		<?php
			require 'location.php';
			$edu = new location;
		?>
		<div id="map"></div>
	</div>
</body>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0-ftuMjsHGds4c5TrWgEa7h6ilMfJye8&callback=createMap">
</script>
</html>
