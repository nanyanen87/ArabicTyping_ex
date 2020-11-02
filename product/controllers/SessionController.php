<?php
session_start();
//ログイン済みの場合
if (isset($_SESSION['EMAIL'])) {
  $userName = htmlspecialchars($_SESSION['EMAIL']);
  $response = array("session" => true, "userName" => $userName);
  echo json_encode($response);
  exit;
}
$response = array("session" => false,);
echo json_encode($response);
