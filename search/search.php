<?php ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WooWooNetwork</title>
    </head>
    <body>
        <div>
            <img src="./content/logo.png" width="75" height="75">
            <link rel="stylesheet" type="text/css" href="css/style.css"/>
            <form>
                <input type="text" placeholder="Search for Keywords">
                <input type="text" placeholder="Enter location">
                <input type="image" src="./content/search.png" alt="Submit" style="width: 32px; height: 32px">
            </form>
            <a href="../accounts/login.php">Login in</a>
            <a href="../accounts/register.php">Sign up</a>
        </div>
        <form>
            <select>
                <option value="any" selected>Any Distance</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
        </form>
        <form>
            <select>
                <option value="relevance" selected>Relevance</option>
                <option value="distance">Distance</option>
                <option value="rating-highest">Rating: highest</option>
                <option value="rating-lowest">Rating: lowest</option>
                <option value="name">Name: A-Z</option>
            </select>
        </form>
    </body>
    <script src="scripts/scripts.js"></script>
</html>