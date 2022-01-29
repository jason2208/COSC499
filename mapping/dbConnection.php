<?php

class sqlConnect {


  public function openCon(){
    $conn = new mysqli("localhost", "test1", "test1","woowoodev") or die("Connect failed: %s\n". $conn -> error);
    return $conn;
  }

  public function closeCon($conn){
    $conn -> close();
  }

}

?>
