<?php

$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);

include(__DIR__ . "/../models/User.php");
$user = new User();
//オブジェクトを返す,{statusCode:200or400,message:""}
echo json_encode($user->login($email, $password));
