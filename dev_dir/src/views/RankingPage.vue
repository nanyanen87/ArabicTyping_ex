<template>
  <div>
    <Header />
    <h1>ランキング</h1>
    <p>あなたのスコアは{{ gameResultData }}</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "RankingPage",
  props: {
    gameResultData: String,
  },
  beforeMount: function () {
    console.log(this.$route.query.gameResultData);
  },
  components: {
    Header,
  },
};
</script>