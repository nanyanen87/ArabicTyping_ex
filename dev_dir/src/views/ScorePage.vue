<template>
  <div>
    <h1>score page</h1>
    <div>{{resultScore}}</div>
    <div>
      <button @click="entryRanking">ランキングに登録する</button>
      <button @click="shareInTwitter">Twitterで共有する</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"ScorePage",
  props:{
    resultScore:Number
  },
  methods:{
    entryRanking(){
      // this.loginCheck();
      //ログイン済かどうかでチェック。ログイン済なら↓処理、そうでないならログインページ。
      //保持するもの、score,gamemode,gamesection,リダイレクト先URL
      const params = new URLSearchParams();
      params.append('resultScore', this.$route.query.resultScore);
      this.axios.post("/controllers/game", params).
      then(res => {
        console.log(res.data);
      }).
      catch(error => {
        console.log(error);
      })
    },
    loginCheck(){
      console.log("check")
      this.$router.push(`/login/score/${this.$route.query.resultScore}`)
    },
    share(){
      console.log("tweet")
    }
  }
}
</script>