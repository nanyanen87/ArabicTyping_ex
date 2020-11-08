<?php

class Book
{
  //コンストラクタでDBに接続してbookインスタンス作成した方がそれっぽい
  
  public function getSentence($title)
  {
    return $title;
  }
  public function insertSentence($pragraphNum, $sentenceNum, $sentence)
  {
  }
}
