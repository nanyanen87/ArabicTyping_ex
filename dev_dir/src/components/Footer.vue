<template>
  <div>
    <a @click="checkUser">registerページへ</a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {
      sessionStart: false,
    };
  },
  methods: {
    async checkUser() {
      try {
        // userチェック
        const res = await this.axios.get("/controllers/session");
        console.log(res.data.session);
        //セキュリティガバガバ？
        if (res.data.userName === "example@gmail.com") {
          this.$router.push(`/register`);
        } else {
          //todo ログインしたらResultをデータベースに登録する、つまり値保持する必要がある
          alert("権限がありません");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
div {
  background-color: #fd9f30;
  display: flex;
  justify-content: flex-end;
}
a {
  padding-right: 20px;
  line-height: 50px;
  display: inline-block;
  cursor: pointer;
  color: aliceblue;
}
</style>