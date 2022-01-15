<?php

    //check if administrator is logged in
    session_start();
    if (!isset($_SESSION["loggedin"])) {
        header('Location: ./login.php');
        die();
    }

    include_once("includes/dbh.inc.php");

    if (isset($_GET["formSearch"]) && isset($_GET["type"]) && isset($_GET["query"])) {

        $type = $_GET["type"];
        $query = $_GET["query"];

        $sql = "SELECT * FROM healer";

        if ($query != "") {
            $mappings = array("Healer ID"=>"id", "Full Name"=>"name", "Email"=>"email", "Address"=>"address");
            $type = $mappings[$type];
            $sql = "SELECT * FROM healer WHERE $type LIKE '%$query%'";
        }

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {

            $rows = "";
            $count = 0;
            $enabled = "1";

            while ($row = $result->fetch_assoc()) {
                $row["enabled"] == "1" ? $enabled = "Enabled" : $enabled = "Disabled";
                $count++;
                $rows .= "<tr><td><input type='checkbox' id='checkbox$count'></td><td>" . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["email"] . "</td><td>" . $row["password"] . "</td><td>" . $row["address"] . "</td><td>" . $enabled . "</td></tr>";
            }

        } else {
            $rows = "<tr><td colspan='7'>No results</td></tr>";
        }

        $conn->close();

    } else if ((isset($_GET["formEnable"]) || isset($_GET["formDisable"]) || isset($_GET["formRemove"])) && isset($_GET["hidden"]) && $_GET["hidden"] != "") {

        $ids = $_GET["hidden"];

        if (isset($_GET["formEnable"]) || isset($_GET["formDisable"])) {

            $sql = "";

            if (isset($_GET["formEnable"])) {
                $sql = "UPDATE healer SET enabled = TRUE WHERE id IN($ids)";
            } else if (isset($_GET["formDisable"])) {
                $sql = "UPDATE healer SET enabled = FALSE WHERE id IN($ids)";
            }

            if ($conn->query($sql) === FALSE) {
                echo "Error modifying record: " . $conn->error;
            }
        
        } else if (isset($_GET["formRemove"])) {

            $sql = "DELETE FROM healer WHERE id IN($ids)";

            if ($conn->query($sql) === FALSE) {
                echo "Error deleting record: " . $conn->error;
            }
            
        }

        $conn->close();
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WooWooNetwork</title>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
    </head>
    <body>
        <h1>Administrator Dashboard</h1>
        <nav>
            <ul>
                <li><a href="client.php">Client</a></li>
                <li id="selected-tab"><a href="healer.php">Healer</a></li>
                <li><a href="appointment.php">Appointment</a></li>
                <li><a href="transaction.php">Transaction</a></li>
                <li><a href="service.php">Service</a></li>
                <li><a href="review.php">Review</a></li>
            </ul>
        </nav>
        <div id="container">
            <div id="top-bar">
                    <div id="top-bar-query">
                        <form action="healer.php" method="get">
                            <select name="type">
                                <option name="id" <?php if (isset($type) && $type == "id") { echo("selected"); } ?>>Healer ID</option>
                                <option name="name" <?php if (isset($type) && $type == "name") { echo("selected"); } ?>>Full Name</option>
                                <option name="email" <?php if (isset($type) && $type == "email") { echo("selected"); } ?>>Email</option>
                                <option name="address" <?php if (isset($type) && $type == "address") { echo("selected"); } ?>>Address</option>
                            </select>
                            <input type="text" name="query" value="<?php if (isset($query)) { echo($query); }?>">
                            <input id="btn-search" type="submit" name="formSearch" value="Search">
                            <select id="select-visibility-filter">
                                <option id="show-all">Show All</option>
                                <option name="show-enabled">Enabled</option>
                                <option name="show-disabled">Disabled</option>
                            </select>
                        </form>
                    </div>
                    <div id="top-bar-toggles">
                        <button id="btn-clear">Clear</button>
                        <form id="formEnable" action="healer.php" method="get">
                            <input id="btn-enable" type="submit" name="formEnable" value="Enable">
                            <input id="hiddenEnable" type="hidden" name="hidden">
                        </form>
                        <form id="formDisable" action="healer.php" method="get">
                            <input id="btn-disable" type="submit" name="formDisable" value="Disable">
                            <input id="hiddenDisable" type="hidden" name="hidden">
                        </form>
                        <form  id="formRemove" action="healer.php" method="get">
                            <input id="btn-remove" type="submit" name="formRemove" value="Remove">
                            <input id="hiddenRemove" type="hidden" name="hidden">
                        </form>
                    </div>
            </div>
            <div class="empty"></div>
            <table id="table-results">
                <thead>
                    <tr>
                        <th></th>
                        <th>Healer ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Password (Encrypted)</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        if (isset($rows)) {
                            echo($rows);
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </body>
    <script src="scripts/script_ch.js"></script>
</html>