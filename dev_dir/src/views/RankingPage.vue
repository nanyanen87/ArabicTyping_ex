<template>
  <div>
    <Header />
    <h3>ランキング</h3>
    <p>{{ userName }}</p>
    <p>あなたのスコアは{{ resultScore }}</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "RankingPage",
  data() {
    return {
      userName: "",
    };
  },
  props: {
    resultScore: Number,
  },
  beforeMount: function () {
    this.checkUser();
  },
  components: {
    Header,
  },
  methods: {
    async checkUser() {
      try {
        const res = await this.axios.get("/controllers/session");
        console.log(res.data.session);
        if (res.data.session) {
          console.log("ok");
          this.userName = res.data.userName;
        } else {
          this.$router.push("/");
          alert("no direct url!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>