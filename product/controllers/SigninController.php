<?php

$e = htmlspecialchars($_POST['email'], ENT_QUOTES);
$p = htmlspecialchars($_POST['password'], ENT_QUOTES);
// echo $email;

//どこまでをコントローラーの中で処理するか。例えばmodelの名前とメソッド名を引数にとるメソッドを定義しておいて
//index.phpでインスタンスを作り、メソッドを実行するようにもできそう。
include(__DIR__ . "/../models/User.php");
$user = new User();
echo $user->signin($e, $p);
