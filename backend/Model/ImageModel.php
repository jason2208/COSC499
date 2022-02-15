<?php
require_once  "Database.php";
 
class ImageModel extends Database
{
    public function uploadImage($fileName)
    {
        return $this->updateTbl('INSERT into image (name) VALUES("'.$fileName.'")');
    }
    public function selectImage($pid)
    {
        return $this->select('SELECT * FROM `image` WHERE pid = ("'.$pid.'")');
    }
}



