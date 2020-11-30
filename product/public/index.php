<?php

if (htmlspecialchars($_SERVER['REQUEST_URI']) == "/") {
  require_once "index.html";
}


$pathAndQuery = explode('?', htmlspecialchars($_SERVER['REQUEST_URI']));
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
}
