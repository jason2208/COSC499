<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");

class HealerController extends BaseController
{
    /**
     * "/locations/list" Endpoint - Get list of users
     */
    public function create()
    {

        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        

        if (strtoupper($requestMethod) == 'POST') {
            try {

                $firstName  = $_POST["firstname"];
                $lastName  = $_POST["lastname"];
                $pid  = $_POST["pid"];
                $description  = $_POST["description"];
                $location = $_POST["location"];
                $rating = $_POST["rating"];
                $instagram = $_POST["instagram"];
                $facebook = $_POST["facebook"];
                $twitter = $_POST["twitter"];

                echo $pid;
             
                $Model = new HealerModel();
                $arrLocations = $Model->addHealer($firstName,$lastName,$pid,$description,$location,$rating,$instagram,$facebook,$twitter);
                echo ("hello: ");
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().' OH NO! Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
 
        // send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    public function get()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
     
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $HealerModel = new HealerModel();
       
                //this is where we define our search params for the drop down bar filtering the results
                $hid = $_GET['hid'];
                $region = $_GET['region'];
           
                if ($hid != NULL) {
                    $arrLocations = $HealerModel->selectHealer($hid);
                    $responseData = json_encode($arrLocations);
                }elseif($region != NULL){
                    $arrLocations = $HealerModel->selectAllHealersRegion($region);
                    $responseData = json_encode($arrLocations);
                }

              
 
             
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'OH NO!!!! Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
 
        // send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
}
