<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $title = htmlspecialchars($_POST["title"], ENT_QUOTES);
  $paraNum = htmlspecialchars($_POST["paragraphNumber"], ENT_QUOTES);
  $senNum = htmlspecialchars($_POST["sentenceNumber"], ENT_QUOTES);
  $sentenceText = htmlspecialchars($_POST["sentenceText"], ENT_QUOTES);
  require_once(__DIR__ . "/../models/Book.php");

  $book = new Book($title);
  $book->insertSentence($paraNum, $senNum, $sentenceText);
  echo "[" . $sentenceText . "]が届いたぜよ。";
}
