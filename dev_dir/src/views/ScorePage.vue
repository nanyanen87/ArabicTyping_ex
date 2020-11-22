<template>
  <div>
    <Header />
    <h1>score page</h1>
    <div>{{ resultScore }}</div>
    <div>
      <div>
        <a class="waves-effect waves-teal btn-flat" @click="entryRanking"
          >ランキングに登録する</a
        >
        <a class="waves-effect waves-teal btn-flat" v-bind:href="shareUrl"
          >Twitterで共有する</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import M from "materialize-css";
export default {
  name: "ScorePage",
  date() {
    return {
      shareUrl: "https://twitter.com/intent/tweet",
    };
  },
  props: {
    gameOption: Object,
    resultScore: Number,
  },
  components: {
    Header,
  },
  mounted: function () {
    M.AutoInit();
    this.gameRetry();
    this.createUrl();
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
    gameRetry() {
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
    createUrl() {
      this.shareUrl =
        `https://twitter.com/intent/tweet` +
        `?text=私の記録は${this.resultScore}でした` +
        `&hashtags=arabictyping` +
        `&url=シェアしたいURL`;
    },
  },
};
</script>