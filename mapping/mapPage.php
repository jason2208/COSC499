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
		}
	</style>
</head>
<body>
	<div class="container">
		<center><h1>Google Maps API TEST</h1></center>
		<?php
			require 'location.php';
			$healerLocations = new location;
			$healerLocations = $healerLocations->getLocations();
			echo $healerLocations;
			$healerLocations = json_encode($healerLocations, true);
			echo '<div id="data">' . $healerLocations . '</div>';
		?>
		<div id="map"></div>
	</div>
</body>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0-ftuMjsHGds4c5TrWgEa7h6ilMfJye8&callback=createMap">
</script>
</html>
