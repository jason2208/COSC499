<?php
/**
 *
 */
class location
{

 public function __construct()
  {
    require_once('dbconnection.php');
    $con = new sqlConnect();
    $connector = $con.openCon();
    console.log("hi!");
  }

  private $hid;
  private $address;
  private $lat;
  private $lng;
  private $tableName = "address";
  private $connector;

  function setHid($hid) { $this->hid = $hid; }
  function getHid() { return $this->hid; }
  function setAddress($address) { $this->address = $address; }
  function getAddress() { return $this->address; }
  function setLat($lat) { $this->lat = $lat; }
  function getLat() { return $this->lat; }
  function setLng($lng) { $this->lng = $lng; }
  function getLng() { return $this->lng; }
}




 ?>
