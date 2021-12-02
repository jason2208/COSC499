<?php

if (isset($_POST["submit"])) {

    include_once("includes/dbh.inc.php");

    $email = $_POST["email"];
    $password = $_POST["password"];

    echo $email;
    echo $password;

    $sql = "SELECT * FROM administrator WHERE email = '$email' AND password ='$password'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {

        $rows = "";
        $count = 0;
        $enabled = "1";

        while ($row = $result->fetch_assoc()) {
            $row["enabled"] == "1" ? $enabled = "Enabled" : $enabled = "Disabled";
            $count++;
            $rows .= "<tr><td><input type='checkbox' id='checkbox$count'></td><td>" . $row["id"] . "</td><td>" . $row["name"]. "</td><td>" . $row["email"] . "</td><td>" . $row["password"] . "</td><td>" . $row["address"] . "</td><td>" . $enabled . "</td></tr>";
        }


        $conn->close();

}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WooWooNetwork</title>
    </head>
    <body>
        <form action="login.php" method="post">
            <input type="email" placeholder="Email" name="email">
            <input type="password" placeholder="Email" name="password">
            <input type="submit" value="Login" name="submit">
        </form>
    </body>
</html>