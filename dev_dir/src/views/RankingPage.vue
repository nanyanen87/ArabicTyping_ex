<template>
  <div>
    <Header />
    <h1>ランキング</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "RankingPage",
  beforeMount: function () {
    //ログイン済でなければ、ログインページにリダイレクト。そしてログイン後のパスを/rankingにしする
    //this.$router.push("/login/ranking")
  },
  components: {
    Header,
  },
};
</script>