<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"), true);
$password = $data["password"];
$email = $data["email"];

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if ($result) {
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        
        if (password_verify($password, $row['password'])) {
            echo json_encode(["message" => "User login successfully"]);  
        
        } else {
            echo json_encode(["message" => "user name and password does not match"]);
        }
    }
} else{
    echo json_encode(["message" => "user does not exist"]);
}

?>