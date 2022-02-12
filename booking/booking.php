<?php

session_start();

include_once("dbh.inc.php");



$sql="SELECT * FROM healer";


$result = $conn->query($sql);
if ($result->num_rows > 0) {

    $rows = "";
    $count = 0;
    $enabled = "1";

    while ($row = $result->fetch_assoc()) {
        $rows .= "<option name=".$row['name'].">".$row['name']."</option>";
    }
}
$conn->close();
?>

<html>
    <title>
        Booking
    </title>
    <header class="">
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
                    </form>
                </p>
            </div>
            <div style="float:left; width: 50%;">
                    <table style="border: 1px;border-color: black;">
                        <tbody style="border: 1px;border-color: black;">
                        <tr><td>Service</td><td>Herbalism Training</td></tr>
                        <tr><td>Price</td><td>21.00</td></tr>
                        <tr><td>Description</td><td>Expert herbal medicine training</td></tr>
                    </tbody>
                    </table>
                    
                <p>
                    booking info
                </p>
            </div>
        </div>
    </tbody>
</html>