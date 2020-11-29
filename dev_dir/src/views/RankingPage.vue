<template>
  <div>
    <Header />
    <h3>ランキング</h3>
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