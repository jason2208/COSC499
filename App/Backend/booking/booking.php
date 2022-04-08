<?php

session_start();

include_once("dbh.inc.php");


//list healers in select bar
$sql="SELECT * FROM healer";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    $rows = "";

    while ($row = $result->fetch_assoc()) {
        $rows .= "<option name=".$row['name'].">".$row['name']."</option>";
    }
}


//show services of the selected healer
if(isset($_GET['submit'])){
    if(!empty($_GET['select'])) {
        $selected = $_GET['select'];
    } else {
        echo 'Please select the value.';
    }
    $sql2="SELECT healer.name AS dname,service.name,service.description FROM service JOIN healer ON healer.id=service.healerId WHERE healer.name Like '$selected'";
$healerInfo = $conn->query($sql2);
if ($healerInfo->num_rows > 0) {

    $rows2 = "";

    while ($row2 = $healerInfo->fetch_assoc()) {
        $rows3=$rows2;
        $rows2 .= 
        "<table class='service'>
        <thead>
        <th>Healer Name</th>
        <th>Service Name</th>
        <th>Description</th>
        </thead>
        <tbody>
        <td>".$row2['dname']."</td>
        <td>".$row2['name']."</td>
        <td>".$row2['description']."</td>
        </tbody>
        </table>";
    }
}

    }





$conn->close();
?>



<html>
    <title>
        Booking
    </title>
    <head>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <header class="top-bar">
    <img src="logo.png" alt="logo">
    <a href="../search/home.php" >About Us</a>
    <a href="../search/healerpage.php">Find Healers</a>
    <a href="../accounts/login.php" >Login</a>
    <a href="../accounts/register.php">Sign Up</a>
    </header>
</head>
    <tbody>
        <div style="width: 100%;">
            <div style="float:left; width: 50%; border-right: 1cm;">
                <p>
                    <form action='booking.php' method="get">
                    <select name="select" id="select">
                        <option value="none" selected disabled hidden>--Select a healer--</option>
                        <?php
                            echo($rows);
                        ?>
                    </select>
                    <input type="submit" name="submit" vlaue="Choose options">
                    </form>
                    <p>
                    <?php
                        if (isset($selected)) {
                            echo('You have chosen: ' . $selected);
                        }
                    ?>
                    </p>
                    <?php
                        if (isset($rows2)) {
                            echo($rows2);
                        }
                    ?>
                </p>
            </div>
            
            
            <div style="float:left; width: 50%;">
                    <!-- <table style="border-style: solid;border: 1px;border-color: black;">
                        <tbody style="border-style: solid;border: 1px;border-color: black;">
                        <tr><td>Service</td><td>Herbalism Training</td></tr>
                        <tr><td>Price</td><td>21.00</td></tr>
                        <tr><td>Description</td><td>Expert herbal medicine training</td></tr>
                    </tbody>
                    </table> -->
                    
                <p>
                <script type="text/javascript" src="https://datelist.io/dist/datelist/1.3.6/js/app.js"></script>
                <div><div id="dlist"></div></div>
                <script type="text/javascript">dlist('a75b583b-e2d1-4241-9dd8-9debd5f705cb');</script>
                </p>
            </div>
        </div>
    </tbody>
</html>