<template>
  <div>
    <Header />
    <div>
      <p>
        あなたのスコアは<span>{{ resultScore }}</span
        >でした
      </p>
    </div>
    <div>
      <div>
        <a class="waves-effect waves-teal btn-flat" @click="entryRanking"
          >ランキングに登録する</a
        >
        <a class="waves-effect waves-teal btn-flat" @click="share"
          >Twitterで共有する</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
// import M from "materialize-css";
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
    // M.AutoInit();
    this.retryGame();
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
    retryGame() {
      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          console.log("retry");
          this.$router.push({
            name: "TypingPage",
            query: {
              gameMode: this.gameOption.mode,
              gameSection: this.gameOption.section,
              keyboard: this.gameOption.keyboard,
              gameSound: this.gameOption.sound,
            },
          });
        }
      });
    },
    share() {
      const shareURL =
        "https://twitter.com/intent/tweet?text=あなたのスコアは" +
        this.resultScore +
        "でした" +
        "&hashtags=arabictyping";
      location.href = shareURL;
    },
    createUrl() {
      console.log(this.shareUrl);
      // this.shareUrl =
      //   `https://twitter.com/intent/tweet` +
      //   `?text=私の記録は${this.resultScore}でした` +
      //   `&hashtags=arabictyping` +
      //   `&url=シェアしたいURL`;
    },
  },
};
</script>
<style  scoped>
span {
  font-weight: bold;
  font-size: large;
}
a {
  border: thin solid #fd9f30;
  margin: 0 20px;
}
</style>