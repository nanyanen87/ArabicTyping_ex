<?php
if ($_SERVER['REQUEST_URI'] == "/") {
  require_once "index.html";
}


$pathAndQuery = explode('?', $_SERVER['REQUEST_URI']);
$pathArray = explode('/', $pathAndQuery[0]);

// var_dump($_SERVER['REQUEST_URI']);

$queryParameters = $pathAndQuery[1];

$call = array();
foreach ($pathArray as $value) {
  if ($value !== "") {
    $call[] = $value;
  }
}

// var_dump($call);

if ($call[0] === "controllers") {
  $fileName = ucwords($call[1]) . "Controller.php";
  //todo ファイル確認メソッドにして共通化
  if (file_exists(__DIR__ . "/../controllers/" . $fileName)) {
    include(__DIR__ . "/../controllers/" . $fileName);
  } else {
    echo "そんなファイルはありません";
  }
} elseif ($call[0] === "views") {
  $fileName = ucwords($call[1]) . ".php";
  if (file_exists(__DIR__ . '/../views/' . $fileName)) {
    include(__DIR__ . '/../views/' . $fileName);
  } else {
    echo "そんなファイルはありません";
  }
} else {
  //SPA用PATH、応急処置すぎるnginx側でリダイレクト二種類のやり方がわからん
  var_dump($call[1]);
  if ($call[1] === null) {
    $filePath = "/" . $call[0] . "?" . $pathAndQuery;
  } else {
    $filePath = "/" . $call[0] . "/" . $call[1] . "?" . $pathAndQuery;
  }
  if (file_exists(__DIR__ . $filePath)) {
    include(__DIR__ .  $filePath);
  } else {
    echo "そんなファイルはありません";
  }
}
