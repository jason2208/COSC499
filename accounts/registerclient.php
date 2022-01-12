<?php
    if (isset($_POST["submit"]) && isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["email"]) && isset($_POST["address"]) && isset($_POST["password"])) {

        include_once("../dashboard/includes/dbh.inc.php");

        $file = $_FILES["file"];
        $fileName = $_FILES["file"]["name"];
        $fileTmpName = $_FILES["file"]["tmp_name"];
        $fileSize = $_FILES["file"]["size"];
        $fileError = $_FILES["file"]["error"];
        $fileType = $_FILES["file"]["type"];

        $fileExt = explode(".", $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = array("jpg", "jpeg", "png");

        if (in_array($fileActualExt, $allowed)) {
            if ($fileError === 0) {
                if ($fileSize < 1000000) {
                    $fileNameNew = uniqid("", true) . "." . $fileActualExt;
                    $fileDestination = "uploads/" . $fileNameNew;
                    move_uploaded_file($fileTmpName, $fileDestination);
                } else {
                    echo "Your file is too big!";
                }
            } else {
                echo "There was an error uploading your file!";
            }
        } else {
            echo "You cannot upload files of this type";
        }

        $name = $_POST["firstname"] . " " . $_POST["lastname"];
        $email = $_POST["email"];
        $address = $_POST["address"];
        $password = $_POST["password"];

        $sql = "INSERT INTO client VALUES (NULL, '$name', '$email', '$password', '$address', TRUE)";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully<br>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
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
        <!-- <button>click to upload a profile photo</button> -->
        <form action="registerclient.php" method="post" enctype="multipart/form-data">
            <input type="file" name="file"><br>
            <label>first name</label>
            <input type="text" name="firstname"><br>
            <label>last name</label>
            <input type="text" name="lastname"><br>
            <label>email</label>
            <input type="text" name="email"><br>
            <label>address</label>
            <input type="text" name="address"><br>
            <label>password</label>
            <input type="text" name="password"><br>
            <input type="submit" value="register" name="submit">
        </form>
    </body>
</html>