<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blockchain12";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


function sanitizeInput($input)
{

  return htmlspecialchars(strip_tags(trim($input)));
}
$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $username = sanitizeInput($_POST["username"]);
  $password = sanitizeInput($_POST["password"]);
  if (empty($_POST["username"]) || empty($_POST["password"])) {
    header("Location: Block_chain/signup.html");
  } else {
    $insertquery = "INSERT INTO users (username, password) VALUES ('$username', '$password')";


    if ($conn->query($insertquery) === TRUE) {
      header("Location: manufacture.html");
    } else {
      echo "Error: " . $insertquery . "<br>" . $conn->error;
    }
  }
}

$conn->close();
?>