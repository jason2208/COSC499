<?php ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WooWooNetwork</title>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>
    <body>
        <div id="header-container">
            <img src="./content/logo.png" width="75" height="75">
            <form>
                <input type="text" placeholder="Search for Keywords">
                <input type="text" placeholder="Enter location">
                <input type="image" src="./content/search.png" alt="Submit" style="width: 24px; height: 24px">
            </form>
            <a href="../accounts/login.php">Login in</a>
            <a href="../accounts/register.php">Sign up</a>
        </div>
        <div id="clear"></div>
        <hr size="0.5" width="100%" color="#444444">
        <div id="filter-container">
            <div id="filter-distance">
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
            </div>
            <div id="filter-sort">
                <form>
                    <select>
                        <option value="relevance" selected>Relevance</option>
                        <option value="distance">Distance</option>
                        <option value="rating-highest">Rating: highest</option>
                        <option value="rating-lowest">Rating: lowest</option>
                        <option value="name">Name: A-Z</option>
                    </select>
                </form>
            </div>
        </div>
        <div id="clear"></div>
        <div class="container-result">
            <div id="result-img">
                <img src="./content/first-img.jpg">
            </div>
            <div>
                <div id="result-name">
                    <a href="#">John Snow</a>
                </div>
                <div id="result-service">
                    <p>Vogue Healing</p>
                </div>
                <div id="result-location">
                    <p>Vancouver, BC</p>
                </div>
                <div id="result-distance">
                    <p>(13km away)</p>
                </div>
                <div id="result-rating">
                    <p>5/5</p>
                </div>
                <div id="result-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit deserunt rerum pariatur, aliquam incidunt at mollitia reiciendis vero dignissimos odio laboriosam molestias dolorem quidem deleniti eaque et repudiandae modi?</p>
                </div>
            </div>
        </div>
        <div id="clear"></div>
        <div class="container-result">
            <div id="result-img">
                <img src="./content/second-img.jpg">
            </div>
            <div>
                <div id="result-name">
                    <a href="#">Sarah Johnson</a>
                </div>
                <div id="result-service">
                    <p>Reiki Healing</p>
                </div>
                <div id="result-location">
                    <p>Vancouver, BC</p>
                </div>
                <div id="result-distance">
                    <p>(13km away)</p>
                </div>
                <div id="result-rating">
                    <p>4/5</p>
                </div>
                <div id="result-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit deserunt rerum pariatur, aliquam incidunt at mollitia reiciendis vero dignissimos odio laboriosam molestias dolorem quidem deleniti eaque et repudiandae modi?</p>
                </div>
            </div>
        </div>
        <div id="clear"></div>
        <div class="container-result">
            <div id="result-img">
                <img src="./content/third-img.jpg">
            </div>
            <div>
                <div id="result-name">
                    <a href="#">John Snow</a>
                </div>
                <div id="result-service">
                    <p>Beginner Yoga</p>
                </div>
                <div id="result-location">
                    <p>Victoria, BC</p>
                </div>
                <div id="result-distance">
                    <p>(8km away)</p>
                </div>
                <div id="result-rating">
                    <p>3/5</p>
                </div>
                <div id="result-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit deserunt rerum pariatur, aliquam incidunt at mollitia reiciendis vero dignissimos odio laboriosam molestias dolorem quidem deleniti eaque et repudiandae modi?</p>
                </div>
            </div>
        </div>
        <div id="clear"></div>
        <div class="container-result">
            <div id="result-img">
                <img src="./content/fourth-img.jpg">
            </div>
            <div>
                <div id="result-name">
                    <a href="#">John Snow</a>
                </div>
                <div id="result-service">
                    <p>Meditation</p>
                </div>
                <div id="result-location">
                    <p>Nelson, BC</p>
                </div>
                <div id="result-distance">
                    <p>(40km away)</p>
                </div>
                <div id="result-rating">
                    <p>1/5</p>
                </div>
                <div id="result-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit deserunt rerum pariatur, aliquam incidunt at mollitia reiciendis vero dignissimos odio laboriosam molestias dolorem quidem deleniti eaque et repudiandae modi?</p>
                </div>
            </div>
        </div>
        <div id="clear"></div>
        <p id="demo"></p>
    </body>
    <script src="scripts/scripts.js"></script>
</html>