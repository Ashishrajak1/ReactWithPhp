<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$name = $data["name"];
$email = $data["email"];
$password = password_hash($data["password"], PASSWORD_DEFAULT);

$query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
if ($conn->query($query)) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["message" => "Error registering user"]);
}
?>