<?php
/**
 *
 */
class location
{

  private $uniqueId = "hid";
  private $address = "address";
  private $lat ="lat";
  private $lng = "lng";
  private $tableName = "address";
  private $con = "con";
  private $result = "result";

  function setHid($uniqueId) { $this->uniqueId = $uniqueId; }
  function getHid() { return $this->uniqueId; }
  function setAddress($address) { $this->address = $address; }
  function getAddress() { return $this->address; }
  function setLat($lat) { $this->lat = $lat; }
  function getLat() { return $this->lat; }
  function setLng($lng) { $this->lng = $lng; }
  function getLng() { return $this->lng; }

  function getAllGeoCoordinates() {
       $sql = "SELECT * FROM $tableName";
       $stmt = $connector->prepare($sql);
       $stmt->execute();
       json_encode($coll, true);
       return $stmt->fetchAll(PDO::FETCH_ASSOC);

         }
  function getLocations() {
       $sql = "SELECT * FROM $this->address WHERE $this->lat IS NULL AND $this->lng IS NULL";
       $stmt = $this->con->prepare($sql);
       $stmt->execute();
       $array = array();
       while ($row = $this->result->fetch_assoc()) {
           echo $row['address']."<br>";
           $array[] = $row;
       }
      return $array;
  }

 public function __construct()
  {
    require_once('dbconnection.php');
    $this->con = OpenCon();
    $sql = "SELECT * FROM address";
    $this->result = $this->con->query($sql);


    //while ($row = $this->result->fetch_assoc()) {
    //    echo $row['address']."<br>";
  //  }


  }


}




 ?>
