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
        echo 'You have chosen: ' . $selected;
    } else {
        echo 'Please select the value.';
    }
    $sql2="SELECT * FROM healer WHERE name=$selected";
$healerInfo = $conn->query($sql);
if ($healerInfo->num_rows > 0) {

    $rows2 = "";

    while ($row = $healerInfo->fetch_assoc()) {
        $rows2 = "<table border=''><tr>123</tr></table>";
    }
}
    }




$conn->close();
?>



<html>
    <title>
        Booking
    </title>
    <header class="top-bar">
    <img src="logo.png" alt="logo">
    <a href="../search/home.php" >About Us</a>
    <a href="../search/healerpage.php">Find Healers</a>
    <a href="../search/services.php">Find Healers(Not done)</a>
    <a href="../accounts/login.php" >Login</a>
    <a href="../accounts/register.php">Sign Up</a>
    </header>
    <tbody>
        <div style="width: 100%;">
            <div style="float:left; width: 50%; border-right: 1cm;">
                <p>
                    <form action='booking.php' method="get">
                    <select name="select" id="select">
                        <option value="none" selected disabled hidden>Select an option</option>
                        <?php
                            echo($rows);
                        ?>
                    </select>
                    <input type="submit" name="submit" vlaue="Choose options">
                    </form>
                </p>
            </div>
            
            <?php
            echo($rows2);
            ?>
            <div style="float:left; width: 50%;">
                    <table style="border-style: solid;border: 1px;border-color: black;">
                        <tbody style="border-style: solid;border: 1px;border-color: black;">
                        <tr><td>Service</td><td>Herbalism Training</td></tr>
                        <tr><td>Price</td><td>21.00</td></tr>
                        <tr><td>Description</td><td>Expert herbal medicine training</td></tr>
                    </tbody>
                    </table>
                    
                <p>
                <script type="text/javascript" src="https://datelist.io/dist/datelist/1.3.6/js/app.js"></script>
                <div><div id="dlist"></div></div>
                <script type="text/javascript">dlist('a75b583b-e2d1-4241-9dd8-9debd5f705cb');</script>
                </p>
            </div>
        </div>
    </tbody>
</html>