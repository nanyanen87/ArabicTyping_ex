<?php
class User
{
  public function signin($e, $p)
  {
    require_once(__DIR__ . '/../data/config.php');
    try {
      $pdo = new PDO(DSN, DB_USER, DB_PASS);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $pdo->exec("create table if not exists userData(
        id int not null auto_increment primary key,
        email nvarchar(255) unique not null,
        password nvarchar(255) not null,
        created timestamp not null default current_timestamp
      )");
    } catch (Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }
    //POSTのValidate。
    if (!$email = filter_var($e, FILTER_VALIDATE_EMAIL)) {
      $response["message"] = '入力された値が不正です。';
      $response["code"] = 400;
      return $response;
    }
    //パスワードの正規表現
    if (preg_match('/\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}+\z/i', $p)) {
      $password = password_hash($p, PASSWORD_DEFAULT);
    } else {
      $response["message"] = 'パスワードは半角英数字をそれぞれ1文字以上含んだ8文字以上で設定してください。';
      $response["code"] = 400;
      return $response;
    }
    //登録処理
    try {
      $stmt = $pdo->prepare("insert into userData(email, password) values(?, ?)");
      $stmt->execute([$email, $password]);
      $response["message"] = '登録完了';
      $response["code"] = 200;
      return $response;
      //todo loginして元のページに戻る
    } catch (\Exception $e) {
      $response["message"] = '登録済みのメールアドレスです。';
      $response["code"] = 400;
      return $response;
    }
  }

  public function login($email, $password)
  {
    require_once(__DIR__ . '/../data/config.php');
    // $response = [];
    session_start();
    //POSTのvalidate
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $response["message"] = '入力された値が不正です。';
      $response["code"] = 400;
      return $response;
    }
    //DB内でPOSTされたメールアドレスを検索
    try {
      $pdo = new PDO(DSN, DB_USER, DB_PASS);
      $stmt = $pdo->prepare('select * from userData where email = ?');
      $stmt->execute([$email]);
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }
    //emailがDB内に存在しているか確認
    if (!isset($row['email'])) {
      $response["message"] = 'メールアドレスが登録されていません';
      $response["code"] = 400;
      return $response;
    }
    //パスワード確認後sessionにメールアドレスを渡す
    if (password_verify($password, $row['password'])) {
      session_regenerate_id(true); //session_idを新しく生成し、置き換える
      $_SESSION['EMAIL'] = $row['email'];
      $response["message"] = 'ログインに成功しました';
      $response["code"] = 200;
      return $response;
    } else {
      $response["message"] = 'メールアドレスとパスワードが一致しません';
      $response["code"] = 400;
      return $response;
    }
  }
}
