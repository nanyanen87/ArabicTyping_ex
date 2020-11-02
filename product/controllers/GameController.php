<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  $gameSection = htmlspecialchars($_GET["gameSection"], ENT_QUOTES);
  echo "「" . $gameSection . "」が届いたぜよ。";
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $resultScore = htmlspecialchars($_POST["resultScore"], ENT_QUOTES);
  echo "[" . $resultScore . "]が届いたぜよ。";
}


//modelに命令、$gameSectionの文章を持ってくる。パラグラフ配列かセンテンス配列、データ取り込みやすい方で
// require_once(__dir__."/../models/book");
//そんなに量多くないしモデルでやる必要ない？作り終えて時間余ったらやるか
