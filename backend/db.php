<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");


$conn = new mysqli("localhost", "root", "", "reactwithphp");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>