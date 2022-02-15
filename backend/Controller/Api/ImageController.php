<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Methods: POST");
header("Acess-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Acess-Control-Allow-Methods, Authorization");

class ImageController extends BaseController
{
    /**
     * "/locations/list" Endpoint - Get list of users
     */
    public function upload()
    {

        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        

        if (strtoupper($requestMethod) == 'POST') {
            try {

                $fileName  =  $_FILES['sendimage']['name'];
                $tempPath  =  $_FILES['sendimage']['tmp_name'];
        
                $fileSize  =  $_FILES['sendimage']['size'];
                $path = $_FILES['sendimage']['name'];
                $ext = pathinfo($fileName, PATHINFO_EXTENSION);
                
                if(empty($fileName))
                {
                    $errorMSG = json_encode(array("message" => "Please select image", "status" => false));	
                    echo $errorMSG;
                }
                else
                {
                    $upload_path = './images/'; // set upload folder path 
                    
                    $fileExt = strtolower(pathinfo($fileName,PATHINFO_EXTENSION)); // get image extension
                        
                    // valid image extensions
                    $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); 
                                    
                    // allow valid image file formats
                    if(in_array($fileExt, $valid_extensions))
                    {		

                        $oldName = $fileName;
                        $fileName = strval(rand(100, 100000)) . "." .$ext ; 

                        if(file_exists($upload_path . $fileName)){
                            $exists = TRUE;
                            $num = 0; 
                        
                            try{
                            while($exists){
                                $fileName = strval(rand(100, 100000)) . "." .$ext ; 
                                if(!file_exists($upload_path . $fileName)){
                                    $exists = FALSE;
                                }
                            }
                        }catch (Error $e) {echo "$e";}
                        }
                        if(!file_exists($upload_path . $fileName))
                        {
                            // check file size '5MB'
                            if($fileSize < 5000000){
                                move_uploaded_file($tempPath, $upload_path . $fileName); // move file from system temporary path to our upload folder path 
                            }
                            else{		
                                $errorMSG = json_encode(array("message" => "Sorry, your file is too large, please upload 5 MB size", "status" => false));	
                                echo $errorMSG;
                            }
                        }
                        else
                        {		
                            $errorMSG = json_encode(array("message" => "Sorry, file already exists check upload folder", "status" => false));	
                            echo $errorMSG;
                        }
                    }
                    else
                    {		
                        $errorMSG = json_encode(array("message" => "Sorry, only JPG, JPEG, PNG & GIF files are allowed", "status" => false));	
                        echo $errorMSG;		
                    }
                }
                




                $data = json_decode(file_get_contents("php://input"), true); // collect input parameters and convert into readable format
             
                $locationModel = new ImageModel();
                $arrLocations = $locationModel->uploadImage( $fileName);
                
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
                $imageModel = new ImageModel();
                $intImage = 80;

                $pid = $_GET['pid'];

                if ($pid != NULL) {
                    $intImage = $pid;
                }

                $arrLocations = $imageModel->selectImage($intImage);
                $responseData = json_encode($arrLocations);
 
             
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
