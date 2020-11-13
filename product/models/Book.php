<?php

class Book
{
  //コンストラクタは名前つけるだけにしよう。メソッドでそれぞれDB接続
  private $bookTitle;
  private $bookText;

  public function __construct($title)
  {
    $this->bookTitle = $title;
  }
  public function getSentence()
  {
    try {
      require_once(__DIR__ . '/../data/config.php');
      $pdo = new PDO(DSN, DB_USER, DB_PASS);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $sqlstatement = "SELECT * from bookTable where title = ?";
      $preparedStatement = $pdo->prepare($sqlstatement);
      $preparedStatement->execute([$this->bookTitle]);
      //bookTextにforeachを使って代入
    } catch (Exception $e) {
      echo $e->getMessage();
    }
    return $this->bookText;
  }
  public function insertSentence($pragraphNum, $sentenceNum, $sentence)
  {

    try {
      require_once(__DIR__ . "/../data/config.php");
      $pdo = new PDO(DSN, DB_USER, DB_PASS);
      $sqlstatement = "create table if not exists bookTable(title nvarchar(255) not null,paragraphNumber int not null, sentenceNumber int not null, sentenceText nvarchar(1023),primary key(title,paragraphNumber,sentenceNumber))";
      $pdo->exec($sqlstatement);
    } catch (Exception $e) {
      echo $e->getMessage();
    }
    //本文登録処理
    //try{}の中身はスコープしない？
    try {
      $sqlStatement = "insert into bookTable(title,paragraphNumber,sentenceNumber,sentenceText) values(?,?,?,?)";
      // ON DUPLICATE KEY UPDATE title=values(title),paragraphNumber=values(paragraphNumber),sentenceNumber=values(sentenceNumber),sentenceText=values(sentenceText);
      $preparedStatement = $pdo->prepare($sqlStatement);
      $preparedStatement->execute(array($this->bookTitle, $pragraphNum, $sentenceNum, $sentence));
    } catch (Exception $e) {
      //今のままではエラー自体が出ていない。プライマリーキー制約に違反した時はエラ〜メッセージを返すようにする。
      echo $e->getMessage();
    }

    return;
  }
  public function updateSentence(){}
}
