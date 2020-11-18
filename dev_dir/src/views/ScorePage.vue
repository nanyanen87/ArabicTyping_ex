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
      try {
        // loginチェック
        const res = await this.axios.get("/controllers/session");
        console.log(res.data.session);
        if (res.data.session) {
          console.log("そのまま");
          //todo resultデータをDBに登録

          //本来はデータベースを反映したランキングページ飛ぶ。今は簡易的に自分のスコアをもう一度表示してるだけ
          this.$router.push(`/ranking`);
        } else {
          //todo ログインしたらResultをデータベースに登録する、つまり値保持する必要がある
          this.$router.push({
            name: "LoginPage",
            params: { nextPage: "/ranking" },
            // query: { gameResultData: gameResultData }
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