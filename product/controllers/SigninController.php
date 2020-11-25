<?php

$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$password = htmlspecialchars($_POST['password'], ENT_QUOTES);

include(__DIR__ . "/../models/User.php");
$user = new User();
echo json_encode($user->signin($email, $password));
