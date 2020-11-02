<template>
  <div>
    <h1>ログアウトしました</h1>
  </div>
</template>

<script>
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
};
</script>