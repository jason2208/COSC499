<?php ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WooWooNetwork</title>
    </head>
    <body>
        <form>
            <input type="text" placeholder="General Search" name="">
            <input type="submit" value="Search">
        </form>
        <h3>Advanced Options</h3>
        <button onclick="getLocation()">Provide Location</button>
        <p id="demo"></p>
        <form>
            <input type="text" placeholder="Location" name="">
            <!-- figure out geolocation -->
            <label>Distance radius<label>
            <select>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>75</option>
                <option>100</option>
                <option>200</option>
            </select><br>
            <!-- iframe goes here -->
            <input type="text" placeholder="Review Score" name=""><br>
            <input type="text" placeholder="Service Name" name="">
            <input type="submit" value="Search">
        </form>
    </body>
    <script src="scripts/scripts.js"></script>
</html>