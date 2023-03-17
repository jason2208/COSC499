<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");

class ServiceController extends BaseController
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

                $hid  = $_POST["hid"];
                $type  = $_POST["type"];
                $length  = $_POST["length"];
                $price  = $_POST["price"];
                $description = $_POST["description"];
                $pid = $_POST["pid"];
         
                echo $hid;
             
                $Model = new ServiceModel();
                $arrLocations = $Model->addService($hid,$type,$length,$price,$description,$pid);
            
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
                $Model = new ServiceModel();
       
                //this is where we define our search params for the drop down bar filtering the results
                $hid = $_GET['hid'];
                $type = $_GET['type'];
                $length = $_GET['length'];
           
                if ($hid != NULL && $type != NULL && $length != NULL ) {
                    $arrLocations = $Model->  selectService( $hid, $type, $length);
                    $responseData = json_encode($arrLocations);
                }elseif($hid != NULL){
                    $arrLocations = $Model -> selectAllServices($hid);
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
