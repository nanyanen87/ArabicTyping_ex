<template>
  <div>
    <Header />
    <h1>ランキング</h1>
    <p>あなたのスコアは{{ resultScore }}</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "RankingPage",
  props: {
    resultScore: Number,
  },
  beforeMount: function () {},
  components: {
    Header,
  },
};
</script>