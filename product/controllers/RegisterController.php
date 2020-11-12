<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $title = htmlspecialchars($_POST["title"], ENT_QUOTES);
  $paraNum = htmlspecialchars($_POST["paragraphNum"], ENT_QUOTES);
  $senNum = htmlspecialchars($_POST["sentenceNum"], ENT_QUOTES);
  $sentence = htmlspecialchars($_POST["sentence"], ENT_QUOTES);
  require_once(__DIR__ . "/../models/Book.php");

  $book = new Book($title);
  $book->insertSentence($paraNum, $senNum, $sentenve);
  echo "[" . $sentence . "]が届いたぜよ。";
  return;
}
