<?php
require_once  "Database.php";
 
class ServiceModel extends Database
{
    public function addService($hid,$type,$length,$price,$description,$pid)
    {
        
        return $this->updateTbl('INSERT INTO service (`hid`,`type`,`length`,`price`,`description`,`pid`) VALUES("'.$hid.'","'.$type.'","'.$length.'","'.$price.'","'.$description.'","'.$pid.'")');


    }
    public function selectService( $hid, $type, $length)
    {
        return $this->select('SELECT * FROM `service` WHERE hid = "'.$hid.'" AND type = "'.$type.'" AND length = "'.$length.'"');

    }
    public function selectAllServices($hid)
    {
        return $this->select('SELECT * FROM `service` WHERE hid = ("'.$hid.'")');
    }




    
}



