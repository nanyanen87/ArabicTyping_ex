<template>
  <div>
    <Header />
    <h3>ログイン画面</h3>
    <div>
      <form @submit.prevent="checkForm" method="post">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,key) in errors" v-bind:key="key">{{ error }}</li>
          </ul>
        </p>
        <p>
          <label for="email">email:</label>
          <input type="email" id="email" v-model="email"/>
        </p>
        <p>
          <label for="password">password:</label>
          <input type="password" id="password" v-model="password"/>
        </p>
        <p class="button" @click="checkForm">
        送信
        </p>
      </form>
      <div>
        <p class="button" @click="guestLogin"
          >ゲストログイン</p
        > 
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "example@gmail.com",
      password: "guestNo1",
      errors: [],
    };
  },
  props: {
    nextPage: String,
    gameOption: Object,
    resultScore: Number,
  },
  components: {
    Header,
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (this.email === "") {
        this.errors.push("email is required.");
        //バリデーション随時追加する
      } else {
        const params = new URLSearchParams();
        params.append("email", this.email);
        params.append("password", this.password);
        this.axios
          .post("/controllers/login", params)
          .then((res) => {
            //falseが返ってきたら、遷移しない
            if (res.data.code === 200) {
              //todo リザルトデータをデータベースに登録して、ランキングページに移動
              //データベース登録処理
              console.log(res.data.message);
              const URL = this.nextPage + `?resultScore=${this.resultScore}`;
              this.$router.push(URL);
            } else {
              alert(res.data.message);
              console.log(res.data.message);
            }
          })
          .catch((error) => {
            console.log("エラーです");
            console.log(error);
          });
      }
    },
    guestLogin() {
      this.email = "example@gmail.com";
      this.password = "guestNo1";
      this.checkForm();
    },
  },
};
</script>
<style scoped>
form {
  display: inline-block;
  width: 50%;
}
.button {
  display: inline-block;
  color: #fd9f30;
  cursor: pointer;
  border: thin solid #fd9f30;
  border-radius: 10px;
  width: 150px;
}
</style>