<template>
  <div>
    <Header />
    <h1>score page</h1>
    <div>{{ resultScore }}</div>
    <div>
      <button @click="entryRanking">ランキングに登録する</button>
      <button @click="shareInTwitter">Twitterで共有する</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "ScorePage",
  date() {
    return {
      gameResultData: {
        gameMode: this.$route.query.gameMode,
        gameSection: this.$route.query.gameSection,
        resultScore: this.$router.query.resultScore,
      },
    };
  },
  props: {
    resultScore: Number,
    gameMode: String,
    gameSection: String,
    keyboard: String,
  },
  components: {
    Header,
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        console.log("retry");
        const URL =
          `/typing` +
          `?gameMode=${this.$route.query.gameMode}` +
          `&gameSection=${this.$route.query.gameSection}` +
          `&keyboard=${this.$route.query.keyboard}`;
        this.$router.push(URL);
      }
    });
  },
  methods: {
    async entryRanking() {
      //resultデータをDBに登録

      try {
        // loginチェック
        const res = await this.axios.get("/controllers/session");
        console.log(res.data.session);
        if (res.data.session) {
          console.log("そのまま");
          this.$router.push(`/ranking?gameResultData=1234`);
        } else {
          //ログインしてない場合はgameResultDataとnextPage=rankingを保持したままログインページへ
          // const URL = `/login/ranking?gameResultData=${this.gameResultData}`;
          // this.$router.push(URL);
          this.$router.push({
            name: "LoginPage",
            params: { nextPage: "/ranking" },
            query: { gameResultData: this.gameResultData },
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    shareInTwitter() {
      console.log("tweet");
    },
  },
};
</script>