<?php
    include_once("includes/dbh.inc.php");

    if (isset($_GET["submit"])) {

        $type = $_GET["type"];  
        $query = $_GET["query"];
        //echo("type: $type<br>");
        //echo("query: $query<br>");

        $sql = "SELECT * FROM review WHERE $type LIKE '%$query%'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $rows = "";
            $count = 0;
            while ($row = $result->fetch_assoc()) {
                $rows .= "<tr><td><input type='checkbox' id='checkbox$count'></td><td>" . $row["id"] . "</td><td>" . $row["name"]. "</td><td>" . $row["email"] . "</td><td>" . $row["password"] . "</td><td>" . $row["address"] . "</td><td>" . $row["enabled"] . "<br>";
                $count++;
            }
        } else {
            echo "0 results";
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
                <li><a href="healer.php">Healer</a></li>
                <li><a href="appointment.php">Appointment</a></li>
                <li><a href="transaction.php">Transaction</a></li>
                <li><a href="service.php">Service</li>
                <li id="selected-tab"><a href="review.php">Review</a></li>
            </ul>
        </nav>
        <div id="top-bar">
            <div id="top-bar-query">
                <form action="review.php" method="get">
                    <select name="type">
                        <option name="clientId">client id</option>
                        <option name="healerId">healer id</option>
                        <option name="serviceId">service id</option>
                        <option name="rating">rating</option>
                        <option name="description">description</option>
                    </select>
                    <input type="text" name="query">
                    <input type="submit" name="submit" text="Search">
                </form>
            </div>
            <div id="top-bar-toggles">
                <button id="btn-clear" onclick="clear()">Clear</button>
                <button id="btn-enable" onclick="enable()">Enable</button>
                <button id="btn-disable" onclick="disable()">Disable</button>
                <button id="btn-delete" onclick="d()">Delete</button>
            </div>
        </div>
        <div></div>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>Client ID</th>
                <th>Healer ID</th>
                <th>Service ID</th>
                <th>Rating</th>
                <th>Description</th>
            </tr>

            <?php
                if (isset($rows)) {
                    echo($rows);
                }
            ?>
            </tbody>
        </table>
    </body>
    <script src="./scripts/scripts.js"></script>
</html>