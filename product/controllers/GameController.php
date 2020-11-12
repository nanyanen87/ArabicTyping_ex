<?php
//わざわざ一つのファイルにまとめず、gameStartControllerとgameEndControllerに分けるべき？
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $gameSection = htmlspecialchars($_GET["gameSection"], ENT_QUOTES);
  echo "「" . $gameSection . "」が届いたぜよ。";
  return;
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $resultScore = htmlspecialchars($_POST["resultScore"], ENT_QUOTES);
  echo "[" . $resultScore . "]が届いたぜよ。";
  return;
}

if ($_GET["gameMode"] == "book") {
  $title = $_GET["gameSection"];
  //urlを直接指定しないとエラー出るかも
  require_once(__DIR__ . "/../models/book");
  $book = new Book($title);
  // echo $book->getSentence();
  echo "hahaha";
} elseif ($_GET["gameMode"] == "word") {
  $difficulty = $_GET["gameSection"];
  require_once(__DIR__ . "/../models/word");
  $word = new Word();
  echo $word->getWord($difficulty);
}
//modelに命令、$gameSectionの文章を持ってくる。パラグラフ配列かセンテンス配列、データ取り込みやすい方で
//if gameMode === book ! require_once(__dir__."/../models/book");
//if gameMode === word ! require_once(__dir__."/../models/word"); 
//そんなに量多くないしモデルでやる必要ない？作り終えて時間余ったらやるか
