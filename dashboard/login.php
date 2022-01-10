<?php

if (isset($_POST["submit"])) {

    include_once("includes/dbh.inc.php");

    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM administrator WHERE email = '$email' AND password = '$password';";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        session_start();
        $_SESSION["loggedin"] = TRUE;
        header('Location: /dashboard/client.php');
    } else {
        echo "Access denied! Administrator doesn't exist.";
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
            <h1>Administrator Login</h1>
            <input type="email" placeholder="Email" name="email">
            <input type="password" placeholder="Password" name="password">
            <input type="submit" value="Login" name="submit">
        </form>
    </body>
</html>