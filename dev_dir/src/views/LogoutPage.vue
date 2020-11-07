<template>
  <div>
    <Header />
    <h1>ログアウトしました</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "LogoutPage",
  beforeMount: function () {
    this.axios
      .get("/controllers/logout")
      .then((res) => {
        console.log(res.data);
        //headerのリロードorヘッダーを格ページにimportする
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