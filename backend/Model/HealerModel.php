<?php
require_once  "Database.php";
 
class HealerModel extends Database
{
    public function addHealer($firstName,$lastName,$pid,$description,$location,$rating,$instagram,$facebook,$twitter)
    {
        
        return $this->updateTbl('INSERT INTO healer (`fname`,`lname`,`pid`,`description`,`location`,`rating`,`instagram`,`facebook`,`twitter`) VALUES("'.$firstName.'","'.$lastName.'","'.$pid.'","'.$description.'","'.$location.'","'.$rating.'","'.$instagram.'","'.$facebook.'","'.$twitter.'")');


    }
    public function selectAllHealersRegion( $region )
    {
        return $this->select('SELECT * FROM `healer`WHERE location = ("'.$region.'")');
    }
    public function selectHealer($hid)
    {
        return $this->select('SELECT * FROM `healer` WHERE hid = ("'.$hid.'")');
    }




    
}



