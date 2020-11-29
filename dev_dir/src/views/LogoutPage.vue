<template>
  <div>
    <Header />
    <h3>ログアウトしました</h3>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "LogoutPage",
  data() {
    return {};
  },
  beforeMount: function () {
    this.axios
      .get("/controllers/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Header,
  },
};
</script>