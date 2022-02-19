<?php
require __DIR__ . "/inc/bootstrap.php";
 
require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/LocationController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/ImageController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/HealerController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/ServiceController.php";
//adress this later. Disabling CORS security is a threat for the USER's Data
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

 
if ((isset($uri[3]) && $uri[3] == 'user')) {
    $isEndpoint = TRUE;
    $objFeedController = new UserController();
    $strMethodName = $uri[4] . 'Action';
    $objFeedController->{$strMethodName}();
}
if ((isset($uri[3]) && $uri[3] == 'location')) {
    $isEndpoint = TRUE;
    $objFeedController = new LocationController();
    $strMethodName = $uri[4] . 'Action';
    $objFeedController->{$strMethodName}();
}
if ((isset($uri[3]) && $uri[3] == 'image')) {
    $isEndpoint = TRUE;
    $objFeedController = new ImageController();
    $strMethodName = $uri[4] . '';
    $objFeedController->{$strMethodName}();
}if ((isset($uri[3]) && $uri[3] == 'healer')) {
    $isEndpoint = TRUE;
    $objFeedController = new HealerController();
    $strMethodName = $uri[4] . '';
    $objFeedController->{$strMethodName}();
}else
if ((isset($uri[3]) && $uri[3] == 'service')) {
    $isEndpoint = TRUE;
    $objFeedController = new ServiceController();
    $strMethodName = $uri[4] . '';
    $objFeedController->{$strMethodName}();
}else{ echo ("Endpoint Not Found");}

?>