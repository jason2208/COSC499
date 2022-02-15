<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class LocationModel extends Database
{
    public function getLocations($limit)
    {
        return $this->select("SELECT * FROM address ORDER BY hid ASC LIMIT ?", ["i", $limit]);
    }
}



