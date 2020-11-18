<template>
  <div>
    <Header />
    <h1>score page</h1>
    <div>{{ resultScore }}</div>
    <div>
      <p>{{}}</p>
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
    return {};
  },
  props: {
    gameOption: Object,
    resultScore: Number,
  },
  components: {
    Header,
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        console.log("retry");
        this.$router.push({
          name: "TypingPage",
          query: {
            gameMode: this.gameOption.mode,
            gameSection: this.gameOption.section,
            keyboard: this.gameOption.keyboard,
          },
        });
      }
    });
  },
  methods: {
    async entryRanking() {
      try {
        // loginチェック
        const res = await this.axios.get("/controllers/session");
        console.log(res.data.session);
        if (res.data.session) {
          console.log("そのまま");
          //todo resultデータをDBに登録

          this.$router.push(`/ranking?resultScore=${this.resultScore}`);
        } else {
          //todo ログインしたらResultをデータベースに登録する、つまり値保持する必要がある
          this.$router.push({
            name: "LoginPage",
            params: { nextPage: "/ranking" },
            query: {
              resultScore: this.resultScore,
              gameMode: this.gameOption.mode,
              gameSection: this.gameOption.section,
              keyboard: this.gameOption.keyboard,
            },
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